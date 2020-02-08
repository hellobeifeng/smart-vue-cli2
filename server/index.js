const path = require('path')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const router = require('./router')
const globalMiddleware = require('./middleware/global')
const config = require('./config').getConfig()
const port = config.port

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
