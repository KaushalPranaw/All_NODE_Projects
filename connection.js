let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node'
});
connection.connect(function (err) {
    if (err)
        return console.error('error ' + err);
    console.log('connected to mysql server');

})

module.exports = connection;

let employee = `create table if not exists employee(
                          id int primary key auto_increment,
                          name varchar(255) not null
                      )`;
connection.query(employee, function (err, results, fields) {
    if (err)
        return console.error('error ' + err.message);
    console.log('table created');
});

connection.end(function (err){
    if(err)
    {
        return console.error('error ' + err.message);
    }
});