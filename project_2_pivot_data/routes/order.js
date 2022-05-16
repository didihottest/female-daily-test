const express = require('express')
const ROUTER = express.Router()
const orderController = require('../api').order

ROUTER.get('/', orderController.orderList)
ROUTER.get('/pivot', orderController.orderPivot)


module.exports = ROUTER