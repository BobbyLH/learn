const Koa = require('koa')
const koaStatic = require('koa-static')
const app = new Koa()

// static source handle
app.use(koaStatic(
  __dirname
))

const server = require('http').createServer(app.callback())
const io = require('socket.io')(server)

// according to username preserve every socket
const userSocket = {}
// preserve each socket by socket id
const socketSet = {}
// user color set
const userColor = ['#00a1f4', '#0cc', '#f44336', '#795548', '#e91e63', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#ffc107', '#607d8b', '#ff9800', '#ff5722']
// preserve message history
const msgHistory = []

io.on('connection', socket => {
  console.log('[Server connection]: success')
  socketSet[socket.id] = socket
  // preserve user joined room
  const rooms = []
  let username
  let color

  socket.on('message', msg => {
    // deconstruction private msg
    const privateMsg = msg.match(/@([^ ]+) (.+)/)
    let content = msg

    if (!username) {
      username = msg
      color = shuffle(userColor)[0]
      content = `Welcome ${username} join us -- SYSTEM`
    }

    if (!userSocket[username]) {
      // preserve user socket
      userSocket[username] = socket
    }

    if (privateMsg) {
      const toUser = privateMsg[1]
      const content = privateMsg[2]
      const toSocket = userSocket[toUser]
      const params = {
        user: username,
        color,
        content: `[private]: ${content}`,
        createAt: new Date().toLocaleString()
      }
      socket.send(params)
      toSocket.send(params)
    } else {
      if (rooms.length) {
        // preserve socket ids which in the rooms
        const socketJSON = {}
        rooms.forEach(room => {
          const roomSockets = io.sockets.adapter.rooms[room].sockets
          Object.keys(roomSockets).forEach(sockedId => {
            if (!socketJSON[sockedId]) socketJSON[sockedId] = 1
          })
        })
        Object.keys(socketJSON).forEach(socketId => {
          socketSet[socketId].emit('message', {
            user: username,
            color,
            content: `[room]: ${content}`,
            createAt: new Date().toLocaleString()
          })
        })
      } else {
        // broadcast message
        const msg = {
          user: username,
          color,
          content: `[public]: ${content}`,
          createAt: new Date().toLocaleString()
        }
        io.emit('message', msg)
        msgHistory.push(msg)
      }
    }
  })

  socket.on('joinRoom', room => {
    if (username && rooms.indexOf(room) === -1) {
      socket.join(room)
      rooms.push(room)
      socket.emit('joined', room)
      socket.send({
        user: 'SYSTEM',
        color,
        content: `[room - ${room}]: Welcome ${username} to join our team chat`,
        createAt: new Date().toLocaleString()
      })
    }
  })

  socket.on('leaveRoom', room => {
    const index = rooms.indexOf(room)
    if (index !== -1) {
      socket.leave(room)
      rooms.splice(index, 1)
      socket.emit('leaved', room)
      socket.send({
        user: 'SYSTEM',
        color,
        content: `[room - ${room}]: ${username}, you already leave our team chat`,
        createAt: new Date().toLocaleString()
      })
    }
  })

  socket.on('getHistory', () => {
    if (msgHistory.length) {
      const history = msgHistory.slice(msgHistory.length - 20)
      socket.emit('history', history)
    }
  })
})

function shuffle (arr) {
  let len = arr.length
  let random
  while (len !== 0) {
    random = (Math.random() * len--) >>> 0;
    [arr[len], arr[random]] = [arr[random], arr[len]]
  }
  return arr
}

server.listen(3100)
