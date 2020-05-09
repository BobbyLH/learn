const { argv, argv0, execArgv, execPath, arch } = process

argv.forEach(element => {
  console.log(element)
})

console.log('arch:', arch)
console.log('argv0:', argv0)
console.log('execArgv:', execArgv)
console.log('execPath:', execPath)
