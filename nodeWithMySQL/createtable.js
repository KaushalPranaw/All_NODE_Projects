var mysql = require('mysql');
var config = require('./config');

var con = mysql.createConnection(config);
con.connect((err)=>{
    if(err)
        throw err;
    con.query(`create table employee3(id int primary key auto_increment, name varchar(20), salary double(10,2))`,(err,res)=>{
       if(err)
        throw err;
        console.log('created');
        console.log(res);
    });
});
