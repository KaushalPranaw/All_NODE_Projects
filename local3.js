// module.exports='hello world';
//exports.myMessage='Hello Pranaw';

// module.exports.show = function(msg)
// {
//     return msg;
// }

// module.exports={id:1,name:'pranaw'}

module.exports=function(fName,lName){
    this.fName=fName;
    this.lName=lName;
    this.fullName=()=>{
        return this.fName+' '+this.lName;
    }
}