const fs = require('fs')
const path = require('path')
const promisify = require('util').promisify

const read = promisify(fs.readFile)
// read(__filename).then(data => {
//   console.log(data.toString())
// }).catch(err => {
//   console.error(err)
// })

async function test () {
  try {
    const content = await read(path.resolve(__filename))
    console.log(content.toString())
  } catch (error) {
    console.error(error)
  }
}

test()
