var mysql = require('mysql');
var config = require('./config');

var con = mysql.createConnection(config);

var sql = 'insert into employee(name,salary) values ?';

var values=[
    ['pankaj',1234.0],
    ['siddhant',1234.56],
    ['rejo',1234.7]
];
con.connect((err)=>{
    if(err)
        throw err;
        console.log('connected');
    con.query(sql,[values],(err,res)=>{
        if(err)
            throw err;
        console.log('inserted');
    })
})