var con=require('./connection')

con.connect((err)=>{
    if(err)
        throw err;
    sql="select * from employee";
    con.query(sql,(err,res)=>{
        if(err)
            throw err;
        console.log(res)
    })
})