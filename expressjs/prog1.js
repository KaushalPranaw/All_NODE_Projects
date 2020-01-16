var express = require('express')
var app = express();
app.get('/',(req,res)=>{
   // res.send('Welcome to Express JS')
    res.send(req.param('name'))
    
});
var server = app.listen(8000,()=>{
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listening at Host : "+host+" ,post : "+port);
})