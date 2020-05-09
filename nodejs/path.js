const { basename, dirname, extname, parse, format, relative, resolve } = require('path')
const fs = require('fs');

const filePath = '/usr/local/bin/test.txt'

console.log(basename(filePath))
console.log(dirname(filePath))
console.log(extname(filePath))
console.log('__filename', __filename)
console.log('__dirname', __dirname)
console.log('relative1', relative(__dirname, __filename))
console.log('relative2', relative(__filename, __dirname))
console.log('resolve', resolve(__dirname, __filename))

const ret = parse(filePath)
console.log('parse', ret)
delete ret.base
ret.name = 'test1'
console.log('format', format(ret))
console.log('parse cwd', parse(process.cwd()));

console.log('fs.existsSync()', fs.existsSync('./notexist.js'));