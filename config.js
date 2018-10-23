const express = require ('express');
const mysql = require('mysql');
const winston = require('winston');

const pool = mysql.createPool({
    connectionLimit: 10,
    host     : 'us-cdbr-iron-east-01.cleardb.net',
    user     : 'bd9924fc0b3651',
    password :'52026a30',
    database : 'heroku_1982f1217375ac8'
})

//
// const pool = mysql.createConnection({
//     host     : '127.0.0.1',
//     user     : 'root',
//     database : 'sql_server'
// })


function connection(){
    return pool
}


//module.exports = CONFIG;
module.exports = connection;
