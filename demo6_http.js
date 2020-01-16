var http=require('http');
http.createServer((req,res)=>{
    if(req.url=='/about')
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('About page');
        res.end();
    }
    else if(req.url=='/admin')
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('Admin page');
        res.end();
    }
    else
    {
        res.end('invalid request');
    }
}).listen(8080);
console.log('listening on 8080')