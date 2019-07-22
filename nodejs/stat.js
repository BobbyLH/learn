const fs = require('fs')

fs.stat('./stat.js', (err, stats) => {
  // if (err) throw err

  if (err) return console.error('文件不存在')

  console.log(stats.isFile())
  console.log(stats.isDirectory())
  console.log(stats)
})
