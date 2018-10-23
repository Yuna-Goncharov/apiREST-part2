var testCase = require('mocha').describe;
var pre = require('mocha').before;
var assertions = require('mocha').it;
var assert = require('chai').assert;
var expect = require('expect.js');
const request = require('supertest');
const usersDal = require('../dao/Users.js');



describe('Test users  dal - getUsers', function() {

    it('get users from DB ', function(done) {

        usersDal.getUsers(function (err, users) {

            assert.equal(err, null, "There shouldn't be an error");

            expect(users).to.be.a('object');

            done();
        });

    });
});


describe('Test users  dal - getUsers By userID ', function() {
    let userId = 3;


    it('get users id  from DB ', function(done) {

        usersDal.getUserById(userId, function (err, logs) {

            assert.equal(err, null, "There shouldn't be an error");

            expect(logs).to.be.a('object');

            done();
        });

    });
});




describe('Test user dal -deleteUser', function() {

    it(' delete  user from DB ', function(done) {
        let userId = 3;
        usersDal.deleteUserById(userId ,function (err, logs) {

            assert.equal(err, null, "There shouldn't be an error");

            expect(logs).to.be.a('object');

            done();
        });

    });
});


describe('Test user  dal -insert to users  ', function() {

    let data = {
        "name": "mochaTest",
        "pass": "123344",
    };


    it(' insert user to  DB of user ', function(done) {

        usersDal.saveNewUser(data , function (err, userId) {

            assert.equal(err, null, "There shouldn't be an error");

            expect(userId).to.be.a('number');
            expect(err).to.be.undefined;


            done();

        });

    });
});


