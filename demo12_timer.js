//set interval
var i=1;
setInterval(function(){
    console.log("setInterval: hey! 1 ms completed...");
i=i+10;
console.log(i);
},1000);

setTimeout(()=>{
    console.log("setTimeout: hey! 1000 ms completed");
},1000)

