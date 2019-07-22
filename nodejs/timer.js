setImmediate(() => {
  console.log('setImmediate')
})

setTimeout(() => {
  console.log('setTimeout')
}, 0)

Promise.resolve('Promise').then(res => console.log(res))

process.nextTick(() => {
  console.log('nextTick')
  process.nextTick(() => {
    console.log('nextTick2')
  })
})
