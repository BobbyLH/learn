const fs = require('fs')

fs.watch(__dirname, { 
  recursive: true
}, (eType, filename) => {
  console.log('type: ', eType)
  console.log('filename: ', filename)
})
