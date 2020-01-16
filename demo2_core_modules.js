// const os=require('os');
// console.log("os.freemem() : "+os.freemem());
// console.log("os.homedir() : "+os.homedir());
// console.log("os.hostname() : "+os.hostname());
// console.log("os.loadavg() : "+os.loadavg());
// console.log("os.platform() : "+os.platform());
// console.log("os.totalmem() : "+os.totalmem());
// console.log("os.type() : "+os.type());

// var path=require("path")
// console.log('Full path : '+$(__filename))

// var assert=require('assert')
// function add(a,b)
// {
//     return a+b;
// }
// var expected=2+2;
// assert(expected===3,'one + two is three');

// var querystring= require('querystring');
// var q=querystring.parse('year=2019&month=April');
// console.log(q.year)
// console.log(q.month)

var util=require('util');
var txt='congrats %s on his %dth birthday!';
var result=util.format(txt,'Allen',3);
console.log(result)