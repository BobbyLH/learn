const EventEmitter = require('events')

class CustomEvent extends EventEmitter {

}

const ce = new CustomEvent()

ce.on('error', (err, time) => {
  console.error('error is: ', err)
  console.error(time)
})

ce.emit('error', new Error('oops!'), Date.now())
