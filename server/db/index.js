const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    port: 3308,
    password: "",
    database: "freewatt"
});

pool.query("", (err, rows, fields) => {

})