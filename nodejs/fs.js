const fs = require('fs')

const result = fs.readFile('./fs.js', (err, data) => {
  if (err) {
    return console.error(err)
  }
  console.log(data, data.toString())
})

console.log(result)
