// console.log(Buffer.allocUnsafe(5, 0x1))
console.log(Buffer.alloc(10))
console.log(Buffer.alloc(20))
console.log(Buffer.alloc(5, 0x1))
console.log(Buffer.allocUnsafe(5, 0x1))
console.log(Buffer.from([1, 2, 3]))
const objBuffer = Buffer.from(`{a: [1, 2, 3]}`);
console.log(Buffer.from('test'))
console.log(Buffer.from('test', 'base64'))

console.log(objBuffer)
