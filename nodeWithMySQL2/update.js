var con=require('./connection')

con.connect((err)=>{
    if(err)
        throw err;
    sql="update employee set name='pranaw kaushal' where name ='pranaw'";
    con.query(sql,(err,res)=>{
        if(err)
            throw err;
        console.log("updated")
        console.log(res)
    })
})