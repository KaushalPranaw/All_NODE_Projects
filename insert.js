let mysql = require('mysql');
let config = require('./config.js');
let connection = mysql.createConnection(config);

let sql = `insert into employee values(1,'pranaw')`;
connection.query(function(err,));
connection.end();