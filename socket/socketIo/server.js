const express = require('express')
const io = require('socket.io')
const app = express()
const server = require('http').createServer(app)
const ioServer = io(server)

app.use(express.static(__dirname))

ioServer.on('connection', socket => {
  socket.send('[Server Msg - connection]: Merry Christmas')
  socket.on('message', msg => {
    console.log('[Server Msg From Client - message]:', msg)
    socket.send('[Server Msg To Send - message]: Happy New Year')
  })
})

server.listen(3001)
