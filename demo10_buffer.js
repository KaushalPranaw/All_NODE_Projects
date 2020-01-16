var buffer=Buffer.from('abc')
console.log(buffer)

//The syntax for creating an empty Buffer of the length 15:

var buf = Buffer.alloc(15);
console.log(buf)
console.log(buf.length)

var buf = Buffer.allocUnsafe(15)
console.log(buf)
console.log(buf.length)