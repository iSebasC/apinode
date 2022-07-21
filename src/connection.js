const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    ssl: {
        rejectUnauthorized: false
    }
});

connection.connect( (err)=> {
    if(err){
        console.log('db is not connected')
        console.log(err)
        return
    } else {
        console.log('db is connected')
    }
})

module.exports = connection;