var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('Welcome to http module')
    res.end();
}).listen(8080);
console.log('listening on 8080')