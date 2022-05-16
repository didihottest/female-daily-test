const axios = require('axios')
const response_message = require('../helper/response_message')
const fs = require('fs')
const appError = require('../utils/appError')

// Get User Tweet timeline 
const getTweetTimeline = async (req, res, next) => {

  const { max_results, pagination_token } = req.query
  // token for twitter
  const bearerToken = process.env.TWITTER_TOKEN;
  if (!bearerToken) {
    throw new appError(400, "Token for Twitter API not found")
  }
  // interceptor for inserting token for every axios request
  axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.Authorization = "Bearer " + bearerToken
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


  try {
    // url to get userID of @amandaputrimau3 twitter account
    const userIdUrl = 'https://api.twitter.com/2/users/by/username/amandaputrimau3'
    // get user data using axios
    const userData = await axios.get(userIdUrl)

    // parameter for filter data timeline and field to be displayed
    const tweetParams = {
      "max_results": 5,
      "tweet.fields": "attachments,author_id,conversation_id,created_at,entities,id,in_reply_to_user_id,referenced_tweets,source,text",
      "tweet.fields": "attachments,source,text",
      "user.fields": "name,profile_image_url,username",
      "expansions": "author_id",
      "media.fields": "duration_ms,height,media_key,preview_image_url,type,url,width"
      // "pagination_token": "7140dibdnow9c7btw3z3psu2rkeuwe0blcv57921iuqeq"
    }
    // set maximum results of tweet
    if (max_results) {
      tweetParams['max_results'] = max_results ?? 5
    }
    // determine which page to paginate
    if (pagination_token) {
      tweetParams['pagination_token'] = pagination_token
    }
    // url for getting timeline data from twitter api
    const url = `https://api.twitter.com/2/users/${userData.data.data.id}/tweets`;
    // get data from twitter api
    const tweetData = await axios.get(url, {
      params: tweetParams
    })

    // restructure data for ease of use by including user on tweet data
    const tweetUser = tweetData.data.data.map((item) => {
      const userTwitted = tweetData.data.includes.users.find((user) => user.id === item.author_id)
      return {
        ...item,
        user: userTwitted
      }
    })
    // response data for client
    const response = {
      // parameter for client to get to the next page
      // use this value as pagination_token on query string
      next_page_token: tweetData.data.meta.next_token ?? null,
      // parameter for client to get back to previous page, 
      // use this value as pagination_token on query string
      prev_page_token: tweetData.data.meta.previous_token ?? null,
      // tweets data from timeline
      tweets: tweetUser,
    }
    // respond to client
    res.json({
      data: response,
      message: response_message.success_get
    })
  } catch (error) {
    next(error)
    console.log(error)
  }

}

module.exports = {
  getTweetTimeline
}