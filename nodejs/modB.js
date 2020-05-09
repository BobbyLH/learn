module.exports.test = 'B'

const modA = require('./modA.js')

console.log('modB: ', modA.test)

module.exports.test = 'BB'
