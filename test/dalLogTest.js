var testCase = require('mocha').describe;
var pre = require('mocha').before;
var assertions = require('mocha').it;
var assert = require('chai').assert;
var expect = require('expect.js');
const request = require('supertest');
const usersDal = require('../dao/Users.js');
const logsDal = require('../dao/Logs.js');

describe('Test logs  dal - getUsers', function() {

    it('get logs from DB ', function(done) {

        logsDal.getLogs(function (err, logs) {

            assert.equal(err, null, "There shouldn't be an error");

            expect(logs).to.be.a('object');

            done();
        });

    });
});

describe('Test logs  dal - logs  By userID ', function() {

    let userId = 3;

    it('get users id  from DB ', function(done) {

        logsDal.getLogByUserId(userId, function (err, logs) {

            assert.equal(err, null, "There shouldn't be an error");

            expect(logs).to.be.a('object');

            done();
        });

    });
});

describe('Test logs  dal -insert to logs  ', function() {


    let log = {
        "message": "mochalog",
        "errorCode": 200,
        "createTime": "2018-08-09"
    };

    let userId = 3;

    it(' insert log to DB ', function(done) {

        logsDal.insertNewLog(userId ,log,  function (err, userId) {

            assert.equal(err, null, "There shouldn't be an error");

            expect(userId).to.be.a('number');
            expect(err).to.be.undefined;



            done();
        });
    });
});