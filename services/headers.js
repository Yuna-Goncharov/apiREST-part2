const mysql = require('mysql');
const connection = require('../config.js');


const getHeader = function (headers){
    if (headers && headers.authorization && headers.password){

        if(headers.authorization == "admin" && headers.password == "admin"){

            return headers ;
        }
        else{
            return null;
        }
    } else{
        return null;
    }
};


module.exports = {getHeader};