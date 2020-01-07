module.exports.test = 'A'

const modB = require('./modB.js')

console.log('modA: ', modB.test)

module.exports.test = 'AA'
