const fs = require('fs')

const rs = fs.createReadStream(__filename)

rs.pipe(process.stdout)
