var http = require('http');

http.createServer((req,res)=>{
  //  res.writeHead(200,{'Content-Type':'text/plain'});
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Pranaw<br>");
    res.write(req.url);
    res.end(' Welcome to Node<br>');
}).listen(8080);