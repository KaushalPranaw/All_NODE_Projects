var mongo=require('mongodb')
var mongoClient=mongo.MongoClient;
var url='mongodb://localhost:27017/';

mongoClient.connect(url,(err,db)=>{
    if(err)
        throw err;
   var dbo=db.db('test')
//    dbo.collection('customers').findOne({},(err,res)=>{
//        if(err)
//        throw err;
//        console.log(res);
//        db.close()
//    })

 dbo.collection('customers').find({},{ projection: { _id: 0, name: 1, address: 1 } }).toArray((err,res)=>{
       if(err)
       throw err;
       console.log(res);
       db.close()
   })

})