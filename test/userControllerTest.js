// var testCase = require('mocha').describe;
// var pre = require('mocha').before;
// var assertions = require('mocha').it;
// var assert = require('chai').assert;
// var expect = require('expect.js');
// const request = require('supertest');
// const usersController = require ('../controllers/usersController')
//
// describe('Get users', function()  {
//     var token = "admin";
//     var auth ={authorization :'admin'};
//     var pass  = {password :'admin'};
//
//     it('it should GET all the users', function(done) {
//
//         try {
//
//             console.log("1");
//
//             request(usersController)
//                 .get('/users')
//                 .set(auth)
//                 .set(pass)
//                 .send(auth)
//                 .send(pass)
//                 .end(function (err, users) {
//
//                     assert.equal(err, null, "There shouldn't be an error");
//
//                     expect(users).to.be.a('object');
//
//
//
//                     done();
//                 });
//
//             console.log("2");
//         }
//         catch(error) {
//             console.log(error);
//             console.log("3");
//         }
//
//
//     });
// });