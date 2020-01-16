var con = require('./connection')
var sql = 'delete from employee where name = ?';
con.connect((err)=>{
    if(err)
        throw err;
    con.query(sql,['pranaw'],(err,res)=>{
        if(err)
            throw err;
        console.log('deleted')
    })
})