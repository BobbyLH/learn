const express = require('express')
const io = require('socket.io')
const app = express()

app.use(express.static(__dirname))

app.listen(3001)

