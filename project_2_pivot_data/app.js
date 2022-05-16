require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', './views')
// routes
app.use(routes)



module.exports = app