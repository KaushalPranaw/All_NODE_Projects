// var events=require('events')
// var eventEmitter=new events.EventEmitter();
// eventEmitter.on('eventname','eventhandler');
// eventEmitter.emit('eventName')


// var events = require('events')
// var eventEmitter = new events.EventEmitter();
// var eventHandler = function () {
//     console.log('My first Event')
// }
// eventEmitter.on('first', eventHandler)
// eventEmitter.emit('first')


// var events = require('events')
// var eventEmitter = new events.EventEmitter();
// var eventHandler = function () {
//     console.log('My first Event')
// }
// eventEmitter.on('first', eventHandler)
// function show()
// {
//     var a=11;
//     console.log(a)
// }
// eventEmitter.emit('first',show())


// var eventEmitter = require('events').EventEmitter;
// var em=new eventEmitter();
// //subscribe first event
// em.addListener('FirstEvent', function(data){
//     console.log('first subscriber: '+data)
// })
// em.on('SecondEvent', function(data){
//     console.log('second subscriber: '+data)
// })
// em.emit('FirstEvent','first event emitter')
// em.emit('SecondEvent','second event emitter')


var eventEmitter = require('events').EventEmitter;
var em = new eventEmitter();
var connectHandler = function connected() {
    console.log('connect successful')
    em.emit('data_received')
    em.emit('new_event')
}
em.on('connection', connectHandler);

em.on('data_received', function () {
    console.log('data_received successfully')
})
em.on('new_event', function () {
    var name = 'Allen'
    console.log(name + " " + name2);
    var name2 = "John"
    var cars = ["Honda", "BMW"];
    console.log('I am a new event');
})
em.emit('connection')
console.log("program ended");