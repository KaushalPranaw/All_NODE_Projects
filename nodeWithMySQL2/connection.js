var mysql = require('mysql')
var config=require('./config')
var con = mysql.createConnection(
    config
);
module.exports=con;