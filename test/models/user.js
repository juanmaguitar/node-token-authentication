'use strict';

const debug = require('debug')('test:models:user');
var utils = require('../utils');

var should = require('should');
var User = rootRequire('server/models').user;

describe('Users: models', () => {

  describe('#create()', () => {
    it('should create a new User', (done) => {

      var testUser = {
        name: 'Barack Obama',
        email: 'test@example.com',
        password: 'supersecretpassword'
      };

      User.create(testUser, function (err, createdUser) {

      	debug(createdUser);
        should.not.exist(err);
        createdUser.name.should.equal('Barack Obama');
        createdUser.email.should.equal('test@example.com');
        createdUser.password.should.exist();
        done();

      });
    });
  })

  describe('#hashPassoword()', function () {
    it('should return a hashed password asynchronously', function (done) {

      var password = 'secret';

      User.hashPassword(password, function (err, passwordHash) {
        should.not.exist(err);
        should.exist(passwordHash);
        debug(passwordHash);
        done();
      });
    });
  });

  describe('#comparePasswordAndHash()', function () {
    it('should return true if password is valid', function (done) {

      var password = 'secret';

      User.hashPassword(password, function (err, passwordHash) {
        User.comparePasswordAndHash(password, passwordHash, function (err, areEqual) {

          should.not.exist(err);
          areEqual.should.equal(true);
          done();

        });
      });
    });
    it('should return false if password is invalid', function (done) {

      var password = 'secret';

      User.hashPassword(password, function (err, passwordHash) {

        var fakePassword = 'imahacker';

        User.comparePasswordAndHash(fakePassword, passwordHash, function (err, areEqual) {

          should.not.exist(err);
          areEqual.should.equal(false);
          done();

        });
      });
    });
  });

  describe('#hasRole ', function () {
    var user;

    beforeEach( (done) => {
      let userTest = { roles: ['admin', 'mod'] };
      User.create(userTest, (err, createdUser) => {
        user = createdUser;
        done();
      });
    });

    it('should return true if the user has role', (done) => {
      user.hasRole('admin').should.be.true;
      user.hasRole('mod').should.be.true;
      done();
    });

    it('should return false if the user does not have role', (done) => {
      user.hasRole('astronaut').should.be.false;
      user.hasRole('cowboy').should.be.false;
      done();
    });
  });

});