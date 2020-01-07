const fs = require('fs')

const content = Buffer.from('this is a buffer test')

// fs.writeFile('./text', 'This is a test', {encoding: 'utf8'}, err => {
//   if (err) throw err

//   console.log('success')
// })

fs.writeFile('./text', content, err => {
  if (err) throw err

  console.log('success')
})
