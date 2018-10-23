const express = require ('express');
const app = express();
const mysql = require('mysql');
const router = express.Router();
const connection = require('../config.js');
const Logs = require('../dao/Logs.js');
const AuthenticationService  = require ('../services/authenticationService.js');


const getLogs = router.get('/logs', function (req, res) {
    Logs.getLogs(function (err, logs) {
       if (err) return res.status(400).send({error: true, message: 'Invalid request, please try again'});

       res.send(logs);
   });
});


const searchLogByUserId = router.get('/logs/:userId', function (req, res)  {
    Logs.getLogByUserId(req.params.userId, function(err, userId){
        if (err) return res.status(400).send({error: true, message: 'Invalid request, please try again'});

        res.send(userId);
    });
});

//delete log by id
const deleteLog = router.delete('/logs/:logId', function (req, res) {
    Logs.deleteLogById(req.params.logId ,function(err , deleteLog ){
        if (err) return res.status(400).send({error: true, message: 'Invalid request, please try again'});

        res.send(deleteLog);
    });
}) ;



//add new log to mysql table
const createNewLog = router.post('/logs', function (req, res){
    const name = req.body.name;
    const password = req.body.password;
    //TO DO - change => to function
    AuthenticationService.authenticate(name, password, userId => {
        {
            console.log("the user id: " + userId);
            Logs.postNewLog(userId, req.body, function (err ,insertId) {
                if (err) return res.status(err.status).send({error: true, message: err.message});

                res.json(insertId);
            });
        }
    });

});


module.exports = router;
