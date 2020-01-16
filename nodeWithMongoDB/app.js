var mongo=require('mongodb')
var mongoClient=mongo.MongoClient;
var url='mongodb://localhost:27017/test';

mongoClient.connect(url,(err,db)=>{
    if(err)
        throw err;
    console.log("database created");
    db.close();
})