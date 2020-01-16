var http = require('http');
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//http.createServer((req,res)=>{
  //  res.writeHead(200,{'Content-Type':'text/plain'});
   // res.writeHead(200,{'Content-Type':'text/html'});

    //res.write(req.url);
    var q = url.parse(adr,true)
    console.log("Host : "+q.host);
    console.log("Path Name : "+q.pathname);
    console.log("Search : "+q.search);
    console.log("Month : "+q.query.month);
   // res.write(q.query.id+" "+q.query.name);
   // res.end('<br> bye bye');
//}).listen(8080);