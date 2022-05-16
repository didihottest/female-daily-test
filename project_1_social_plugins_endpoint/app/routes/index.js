const ROUTER = require('express').Router()
const twitter_timeline_route = require('./twitter_timeline')


ROUTER.use('/twitter', twitter_timeline_route)

// handling for unknown routes
ROUTER.all('*', (req, res, next) => {
  res.status(404).json({
    error: 404,
    message: `Request URL ${req.path} Not Found`
  })
})
// handling error
ROUTER.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  res.status(statusCode).json({
    error: statusCode,
    message: err.message
  })
})

module.exports = ROUTER