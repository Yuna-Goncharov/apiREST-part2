const express = require ('express');
const app = express();
const mysql = require('mysql');
const router = express.Router();
const connection = require('../config.js');
//const AuthenticationService = require('../services/authenticationService')

const getLogs = function (callback) {
    const queryString = "SELECT * FROM logs";
    connection().query(queryString, callback);
};


//search for log with primary key for user
const getLogByUserId = function (userId , callback){
    const queryString ="SELECT * FROM sql_server.logs where userId =  " + userId ;
    connection().query(queryString, callback);

};
const insertNewLog = function (userId, logData , callback){
    if (!userId) {
        return callback({status: 400, message: 'Wrong Email or password, Try again!'});
    }

    const queryString = " INSERT INTO `sql_server`.`logs` (`userId`, `message`, `errorCode`, `createTime`) VALUES ('" +
        userId + "', '" +
        logData.message + "', '" +
        logData.errorCode + "', '" +
        logData.createTime + "');";

    connection().query(queryString, logData,  (error, results) => {
        if (error) return callback({status: 400, message: 'Invalid input, please try again' });

        // console.log("Updated log for new data:", results);
        // var newId = results.insertId;
       callback(undefined, results.insertId);

        });
};


//delete log by id
const  deleteLogById = function (logId,callback){
    const queryString = "DELETE FROM `logs` WHERE  `logId` = " + logId;
    connection().query(queryString, callback);
};



module.exports = {
    router,
    getLogs,
    getLogByUserId,
    insertNewLog,
    deleteLogById
};

