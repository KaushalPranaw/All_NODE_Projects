var express = require('express')
var app = express()
var con = require('./connection')
var parser = require('body-parser')
var jsonParser = parser.json()

app.use(jsonParser)

app.get('/emps', (req, res) => {
    con.connect((err) => {
        if (err)
            throw err;
        console.log("connected with mysql");
        con.query('select * from employee', (err, result, field) => {
            res.json(result)
        });
    })
})

app.post('/emp', (req, res) => {
    con.connect((err) => {
        if (err)
            throw err;
        console.log("connected with mysql");
        con.query('insert into employee values(default,?,?)', [req.body.name, req.body.salary])
    })
    res.send("inserted")
})
app.put('/emp/:id', (req, res) => {

    con.connect((err) => {
        if (err)
            throw err;
        console.log("connected with mysql");
        con.query('update employee set name=? where id=?', [req.body.name, req.params.id])
    })
    res.send("updated")
})
app.delete('/emp/:id', (req, res) => {
    con.connect((err) => {
        if (err)
            throw err;
        console.log("connected with mysql");
        con.query('delete from employee where id=?', [req.params.id])
    })
    res.send("deleted")
})


app.listen(1000)
console.log("listening on 1000");