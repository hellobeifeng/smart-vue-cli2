const path = require('path')
const express = require('express')
const router = express.Router()
const userController = require('../controller/user')

router
  .get('/user', userController.user)
  .use('/', express.static(path.resolve(__dirname, '../../client/dist')))

module.exports = router
