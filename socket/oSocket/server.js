const Koa = require('koa')
const koaStatic = require('koa-static')
const Ws = require('ws').Server
const app = new Koa()
const wsServer = new Ws({
  port: 8288
})

app.use(koaStatic(
  __dirname
))

app.listen(3000)

wsServer.on('connection', socket => {
  socket.on('message', msg => {
    console.log('[From ws-client] message:', msg)
    socket.send(`Hello, It's our first time connection, it's your message: ${msg}`)
  })
})
