const list = document.getElementById('list')
const msg = document.getElementById('msg')
const sendBtn = document.getElementById('sendBtn')
const socket = io()

socket.on('connect', () => {
  console.log('[Client connection]: success')
  socket.emit('getHistory')
})

socket.on('message', data => createItem(data))

socket.on('joined', room => {
  document.getElementById(`join-${room}`).style.display = 'none'
  document.getElementById(`leave-${room}`).style.display = 'inline-block'
})

socket.on('leaved', room => {
  document.getElementById(`join-${room}`).style.display = 'inline-block'
  document.getElementById(`leave-${room}`).style.display = 'none'
})

socket.on('history', history => {
  history.map(data => createItem(data))
})

function createItem (data) {
  const li = document.createElement('li')
  li.className = 'mdl-list__item--three-line'
  li.innerHTML = `<span class="mdl-list__item-primary-content">
    <i class="material-icons mdl-list__item-avatar">person</i>
    <span class='user' style="color: ${data.color}">${data.user}</span>
    <span class='createAt'>at: ${data.createAt}</span>
    <span class="mdl-list__item-text-body" style="color: ${data.color}">
      say: ${data.content}
    </span>
  </span>`
  list.appendChild(li)
  list.scrollTop = list.scrollHeight
}

function send () {
  const val = msg.value
  if (val) {
    socket.emit('message', val)
    msg.value = ''
  } else {
    window.alert('cannot be empty')
  }
}

function enterSend (e) {
  const code = e.keyCode
  if (code === 13) send()
}

function privateChat (e) {
  const target = e.target
  const user = target.innerHTML
  if (target.className === 'user') msg.value = `@${user} `
}

function join (room) {
  socket.emit('joinRoom', room)
}

function leave (room) {
  socket.emit('leaveRoom', room)
}

sendBtn.onclick = send

msg.onkeydown = e => enterSend(e)

list.onclick = e => privateChat(e)
