const ROUTER = require('express').Router()
const twitter_timeline_API = require('../api').twitter_timeline


ROUTER.get('/timeline', twitter_timeline_API.getTweetTimeline)

module.exports = ROUTER