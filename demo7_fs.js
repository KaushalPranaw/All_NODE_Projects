var fs=require('fs')
// fs.open('file1.txt','w',(err,file)=>{
//     if(err)
//     throw err;
//     console.log('Saved!')
// })

// fs.readFile('file1.txt',(err,data)=>{
//     if(err)
//         throw err;
//         console.log(data.toString());
// })

//fs.readFileSync me 1->2->3 hi ayega humesha because of blocking io
// fs.readFile is aync so 1->3->2 bhi aa skta depend which one is completed first
// async is non blocking io

// fs.rename('file1.txt','file2.txt',(err,data)=>{
//     if(err)
//     throw err;
//     console.log('FIle is renamed');
// })

fs.writeFile('file2.txt','bye bye',(err,data)=>{
    if(err)
    throw err;
    console.log('write operation complete')
})

//to delete use unlink
// fs.unlink('file2.txt',()=>{
//     console.log('deleted')
// })

fs.appendFile('file2.txt','Hello Rahul',(err)=>{
    if(err)
        throw err;
    else
        console.log('appended')
})