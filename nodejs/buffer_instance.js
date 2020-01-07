const buf = Buffer.from('This is a Test!')

console.log(buf.length)

// const bufAlloc = Buffer.alloc(10)
const bufAlloc = Buffer.allocUnsafe(10)
bufAlloc[0] = 2

console.log(bufAlloc.length)

console.log(buf.toString('base64'))

const buf3 = Buffer.allocUnsafe(10)

console.log(buf3)
console.log(buf3.fill(10, 2, 6))

const buf4 = Buffer.from('test')
const buf5 = Buffer.from('test')
const buf6 = Buffer.from('test!')

console.log(buf4.equals(buf5))
console.log(buf4.equals(buf6))

console.log(buf4.indexOf('es'))
console.log(buf4.indexOf('eas'))
