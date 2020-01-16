var express = require('express')
var app = express();
var fs = require('fs')

var parser = require('body-parser')
var jsonParser = parser.json();

app.use(jsonParser)

app.get("/emps", (req, res) => {

    fs.readFile('employee.json', (err, data) => {
        if (err)
            throw err;
        console.log(JSON.parse(data));
        res.json(JSON.parse(data))
    })
})
app.post("/emp", (req, res) => {
    emp = [];
    fs.readFile('employee.json', (err, data) => {
        if (err)
            throw err;
        emp = JSON.parse(data)
        emp.push(req.body)
        fs.writeFile('employee.json', JSON.stringify(emp), (err, data) => {
            if (err)
                throw err;
            res.send("inserted")

        })
    })
})

app.put("/emp/:id", (req, res) => {
    emp = [];
    fs.readFile('employee.json', (err, data) => {
        if (err)
            throw err;
        emp = JSON.parse(data)
        for (i = 0; i < emp.length; i++) {
            if (emp[i].id == req.params.id) {
                emp[i] = req.body;
            }
        }
        fs.writeFile('employee.json', JSON.stringify(emp), (err, data) => {
            if (err)
                throw err;
            res.send("updated")

        })
    })
})
app.delete("/emp/:id", (req, res) => {
    emp = [];
    fs.readFile('employee.json', (err, data) => {
        if (err)
            throw err;
        emp = JSON.parse(data)
        for (i = 0; i < emp.length; i++) {
            if (emp[i].id == req.params.id) {
                emp.splice(i, 1)
            }
        }
        fs.writeFile('employee.json', JSON.stringify(emp), (err, data) => {
            if (err)
                throw err;
            res.send("deleted")

        })
    })
})

app.listen(1000)
console.log("listening on 1000");