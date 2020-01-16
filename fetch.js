let mysql = require('mysql');
let config = require('./config.js');
let connection = mysql.createConnection(config);

let sql = 'select * from employee';

connection.query(sql,(err,result,fields)=>{
    console.log(result);
});
connection.end();