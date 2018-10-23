const express = require ('express');
const app = express();
const mysql = require('mysql');
const router = express.Router();
const connection = require('../config.js');
const Users = require('../dao/Users.js');
const headers = require ('../services/headers');

const getUsers = router.get('/users', function (req, res) {

    var header = headers.getHeader(req.headers);

    if(header){

        Users.getUsers( function (err, users) {
        if (err) return res.status(400).send({error: true, message: 'Invalid request, please try again'});

            return users;
        });
    } else {
        return res.status(403).json({success: false, msg: 'Ooops wrong headers, try again'});
    }
});

//search for user with primary key
const searchUserById = router.get('/users/:userId', function (req, res)  {
    var header = headers.getHeader(req.headers);
    if(header){
    Users.getUserById(req.params.userId, function(err, userId){
        if (err) return res.status(400).send({error: true, message: 'Invalid request, please try again'});

        res.send(userId);
    });
    }else {
        return res.status(403).send({success: false, msg: 'Ooops wrong headers, try again'});
    }
});

//delete user by id
const deleteUser = router.delete('/users/:userId', function (req, res) {
    Users.deleteUserById(req.params.userId ,function(err , deleteUser ){
        if (err) return res.status(400).send({error: true, message: 'Invalid request, please try again'});

        res.send(deleteUser );
    });
}) ;



//add new log to mysql table
const createNewUser = router.post('/users', function (req, res){
    Users.saveNewUser( req.body , function(err , userId ){

        if (err) return res.status(400).send({error: true, message: 'Invalid request, please try again'});
        console.log(req.body);
        res.json(userId);
    });
});


module.exports = router;
