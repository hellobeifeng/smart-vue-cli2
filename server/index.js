const path = require('path')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const router = require('./router')
const globalMiddleware = require('./middleware/global')
const config = require('./config').getConfig()
const port = config.port
const mongoose = require("mongoose");

mongoose.connect(config.mongooseConnectUrl);
const con = mongoose.connection;
con.on('error', console.error.bind(console, '连接数据库失败'));
con.once('open',()=>{
  console.log('数据库连接成功', config.mongooseConnectUrl)
})

app
  .use(globalMiddleware)
  .use(config.basePath, router)
  .use(config.basePath, express.static(path.resolve(__dirname, '../public')))

server.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n', 'env', config)
})
