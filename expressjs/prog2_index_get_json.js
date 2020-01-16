var express = require('express');
var app = express();

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/"+"index.html");
})

app.get("/process_get",(req,res)=>{
    response = {
        firstName: req.query.firstName,
        lastName : req.query.lastName
    };
    console.log(response);
    res.end(JSON.stringify(response))
})
app.listen(8000);