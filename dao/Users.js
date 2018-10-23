const express = require ('express');
const app = express();
const mysql = require('mysql');
const connection = require('../config.js');
const router = express.Router();
const routerUsers = express.Router();



const getUsers = function (callback) {
    const queryString = "SELECT * FROM users";
    connection().query(queryString, callback);
};

//search for log with primary key
const getUserById = function (userId , callback){
    const queryString ="SELECT * FROM `users` WHERE  `userId` = " + userId ;
    connection().query(queryString, callback);

};

//delete log by id
const  deleteUserById = function (userId, callback){
    const queryString = "DELETE FROM `users` WHERE  `userId` = " + userId;
    connection().query(queryString, callback);

};


const saveNewUser = function (userData, callback)
{
    const queryString = "INSERT INTO `sql_server`.`users` (`name`, `password`) VALUES ('" +
                        userData.name + "', '" +
                        userData.password + "');";

    connection().query(queryString,  (error, results) => {

        if (error) return callback({status: 400, message: 'Invalid input, please try again'});

        callback(undefined, results.insertId);
    });
};



module.exports = {
    router,
    getUsers,
    getUserById,
    deleteUserById,
    saveNewUser
};

