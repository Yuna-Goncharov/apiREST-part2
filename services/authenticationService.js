
const mysql = require('mysql');
const connection = require('../config.js');


const authenticate = function (name, password, callback){

    const query = "SELECT * FROM sql_server.users where name = '" + name + "' LIMIT 3;";

    connection().query(query, function (error , results) {

        if (error) {
            console.log('DB error: ' + error);
        } else if(results.length > 0 && results[0].password == password) {
            console.log('You are in! :)');
            var userId = results[0].userId;
            console.log(userId);
            callback(userId);
        } else {
            authenticate.result = false
            callback(error);
        }
    })

};

module.exports = {authenticate};