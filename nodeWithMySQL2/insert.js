var con=require('./connection')

con.connect((err)=>{
    if(err)
        throw err;
    sql="insert into employee values(default,'ram',43938.3)";
    con.query(sql,(err,res)=>{
        if(err)
            throw err;
        console.log("inserted")
        console.log(res)
    })
})