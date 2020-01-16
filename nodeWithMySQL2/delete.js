var con=require('./connection')

con.connect((err)=>{
    if(err)
        throw err;
    sql="delete from employee where id=2";
    con.query(sql,(err,res)=>{
        if(err)
            throw err;
            console.log('deleted')
        console.log(res)
    })
})