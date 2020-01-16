var http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    /*fs.readFile('file.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    })*/


    // fs.appendFile('abc.txt',"pranaw kaushal",(err)=>{
    //     if(err)
    //         throw err;
    //     console.log("saved");
    // })

    // fs.open('filecreated.txt','w',(err,data)=>{
    //     if(err)
    //         throw err;
    //     console.log('created');
    // })

    // fs.writeFile('filecreated.txt',"pranaw kaushal",(err)=>{
    //     if(err)
    //         throw err;
    //     console.log("written");
    // })

    // fs.unlink('filecreated.txt',(err)=>{
    //     if(err)
    //         throw err;
    //     console.log('deleted')
    // })

    fs.rename('abc.txt','abcd.txt',(err)=>{
        if(err)
            throw err;
        console.log('renamed');
    })
}).listen(8080);