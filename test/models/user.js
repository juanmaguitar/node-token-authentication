'use strict';

const debug = require('debug')('test:models:user');
var utils = require('../utils');
var bcrypt = require('bcrypt-as-promised');

var should = require('should');
var User = require('server/models').user;

describe('Users: models', () => {

  describe('#create()', () => {

    it('should create a new User', (done) => {

      var testUser = {
        name: 'Barack Obama',
        username: 'barackforpresident',
        emails: [{
          type: 'office',
          value: 'me@whitehouse.com'
        }],
        password: 'supersecretpassword'
      };

      User.create(testUser, function (err, createdUser) {
      	debug(createdUser);
        should.not.exist(err);
        createdUser.name.should.equal('Barack Obama');
        createdUser.username.should.equal('barackforpresident');
        createdUser.emails[0].type.should.equal('office');
        createdUser.emails[0].value.should.equal('me@whitehouse.com');
        //createdUser.password.should.exist();
        done();
      });

    });

  })

  describe('#hashPassoword()', function () {

    it('should return a hashed password asynchronously', (done) => {

      var password = 'secret';

      User.hashPassword(password)
        .then( (passwordHash) => {
          should.exist(passwordHash);
          debug(passwordHash);
          done();
        })
        .catch( console.log )

    });

  });

  describe('#comparePasswordAndHash()', () => {

    it('should return true if password is valid', (done) => {

      var password = 'secret';

      User.hashPassword(password)
        .then ( User.comparePasswordAndHash.bind(null, password) )
        .then ( (areEqual) => {
          areEqual.should.equal(true);
          done();
        })
        .catch( console.error )

    });

    it('should return a bcrypt.MISMATCH_ERROR exception if password is invalid', (done) => {

      var password = 'secret';
      var fakePassword = 'imahacker';

      User.hashPassword(password)
        .then ( User.comparePasswordAndHash.bind(null, fakePassword) )
        .catch( function(err) {
          const errConstructor = err.constructor;
          errConstructor.should.equal(bcrypt.MISMATCH_ERROR);
          done();
        })

    });

  });

  describe('#hasRole ', () => {

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