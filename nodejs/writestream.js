const fs = require('fs')
const path = require('path')

const ws = fs.createWriteStream(path.join(__dirname, 'test.txt'))

const tid = setInterval(() => {
  const num = parseInt(Math.random() * 10)
  console.log('num: ', num)
  if (num < 7) {
    ws.write('' + num)
  } else {
    clearInterval(tid)
    ws.end()
  }
}, 200)

ws.on('finish', () => {
  console.log('finish')
})
