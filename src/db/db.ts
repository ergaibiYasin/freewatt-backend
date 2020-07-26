const mysql = require("mysql");

export const pool = mysql.createPool({
    connectionLimit : 10, // default = 10
    host            : 'localhost',
    user            : 'root',
    port            :'3308',
    password        : '',
    database        : 'freewatt'
});

