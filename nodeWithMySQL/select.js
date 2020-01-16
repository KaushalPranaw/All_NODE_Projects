var mysql = require('mysql');
var con = require('./connection');
con.connect((err)=>{
    if(err)
        throw err;
    // con.query('select * from employee where name  = '+mysql.escape('pranaw'),(err,res,field)=>{
    //     if(err)
    //         throw err;
    //     //console.log(field);
    //     console.log(res);
    // })

    //or
    con.query('select * from employee where name  = ?',['pranaw'],(err,res,field)=>{
        if(err)
            throw err;
        //console.log(field);
        console.log(res);
    })
})