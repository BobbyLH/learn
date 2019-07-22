const fs = require('fs')

fs.readdir(process.cwd(), (err, files) => {
  if (err) throw err

  console.log(files)
})
