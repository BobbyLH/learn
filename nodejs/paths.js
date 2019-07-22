const { resolve } = require('path')

console.log('__dirname    ', __dirname)
console.log('__filename   ', __filename)
console.log('process.cwd()', process.cwd())
console.log('./           ', resolve('./'))
console.log('../          ', resolve('../'))
