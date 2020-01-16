
let config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node'
}
module.exports = config;


// con.connect((err) => {
//     if (err)
//         throw err;
//     console.log('connected')
//     con.query('Create database node',(err,res)=>{
//         if (err)
//             throw err;
//         console.log(res);
//     })
// });