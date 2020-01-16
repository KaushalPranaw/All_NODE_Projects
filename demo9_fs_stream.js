
//Reading stream
// var fs=require('fs');
// var data='';
// var readerStream=fs.createReadStream('file2.txt');
// readerStream.setEncoding('UTF8');
// readerStream.on('data',function(chunk){
//     data+=chunk;
// })
// readerStream.on('end',function(){
//     console.log(data);
// })

//Writing stream
// var fs=require("fs");
// var data='Hello Welcome to streams';
// var writeStream=fs.createWriteStream('file.txt');
// writeStream.write(data,'UTF8');
// writeStream.end();
// writeStream.on('finish',()=>{
//     console.log('write completed')
// })
// writeStream.on('error',(err)=>{
//     console.log(err.stack)
// })
// console.log('Program ended')

//Reading in a file and writing in another file
var fs=require('fs')
var readerStream=fs.createReadStream('file.txt');
console.log('read from first file')

var writeStream=fs.createWriteStream('file2.txt');
readerStream.pipe(writeStream);
console.log('file written to another file')
console.log('program ended')