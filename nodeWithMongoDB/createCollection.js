var mongo=require('mongodb')
var mongoClient=mongo.MongoClient;
var url='mongodb://localhost:27017/';

mongoClient.connect(url,(err,db)=>{
    if(err)
        throw err;
   var dbo=db.db('test')
   dbo.createCollection('customers',(err,res)=>{
       if(err)
        throw err;
        console.log("collection created");
        db.close()
   })

})