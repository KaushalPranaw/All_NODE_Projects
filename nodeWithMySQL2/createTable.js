var con=require('./connection')
con.connect((err)=>{
    if(err)
        throw err;
     sql="create table employee(id int primary key auto_increment, name varchar(20), salary double(10,2))";
    con.query(sql,(err,res)=>{
        if(err)
            throw err;
        console.log("table created")
        console.log(res)
    })
    
})
