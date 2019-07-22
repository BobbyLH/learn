 const EventEmitter = require('events')

 class CustomEvent extends EventEmitter {

 }

 const ce = new CustomEvent()

 ce.on('test', () => {
   console.log('this is a test!')
 })

//  setImmediate(() => {
//    ce.emit('test')
//  }, 1500)

 setInterval(() => ce.emit('test'), 1500)
