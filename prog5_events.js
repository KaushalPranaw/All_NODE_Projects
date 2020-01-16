var events = require('events')
var eventEmitter = new events.EventEmitter();

var eventHandler  = ()=>{
    console.log("My Name is Pranaw Kaushal");
};

eventEmitter.on('name',eventHandler);

eventEmitter.emit('name');