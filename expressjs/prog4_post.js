var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({ extended: false })
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index1_post.html");
})
app.post('/process_post', urlEncodedParser, (req, res) => {
    response = 
    {
        firstName : req.body.firstName,
        lastName : req.body.lastName
    };
    console.log(JSON.stringify(response))
    res.send(JSON.stringify(response))
}).listen(8000);