const fs = require('fs')

fs.readFile('./readFile.js', 'utf8', (err, data) => {
  if (err) throw err

  console.log(data)
})

const data = fs.readFileSync('./resolve.js', 'utf8')

console.log('sync: ', data)
