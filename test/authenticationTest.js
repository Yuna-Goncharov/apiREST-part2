var testCase = require('mocha').describe;
var pre = require('mocha').before;
var assertions = require('mocha').it;
var assert = require('chai').assert;
var router = require('express').Router();
var expect = require('expect.js');
const request = require('supertest');
const authenticate = require('../services/authenticationService')


describe('Test user authentication  ', function() {

    let name = "admin";
    let password = "admin";

    it(' insert user and password  and test if valid user in DB ', function(done) {

        authenticate.authenticate(name , password , function (err, userId) {

            assert.equal(err, null, "There shouldn't be an error");

            expect(err).to.be.undefined;

            done();
        });
    });
});