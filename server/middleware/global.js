const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router
    .use(bodyParser.json({limit: '5mb'})) // 设置请求体最大大小为5M

module.exports = router
