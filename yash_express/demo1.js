var express = require('express')
var app = express();


var parser = require('body-parser')
var jsonparser = parser.json()

app.use(jsonparser)

// var urlencodedParser = bodyParser.urlencoded({ extended: false })  
// app.use(express.static('public'));

app.get('/', (req, res) => {
   // res.send('Welcome to express')
   res.redirect('/about')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

var emps = [{ id: 1, name: "pranaw", salary: 4337889 },
{ id: 2, name: "pranaw", salary: 4337889 },
{ id: 3, name: "pranaw", salary: 4337889 }
]
app.get('/emps', (req, res) => {
    // var name='pranaw kaushal'
    // var loc='pune'
    // res.json([name,loc])

    res.json(emps)
})

app.post('/emp', (req, res) => {
    emps.push(req.body)
    res.json(emps)
})

app.listen(1000)
console.log("listening on 1000");