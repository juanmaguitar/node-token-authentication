'use strict';

const debug = require('debug')('test:models:user');
var utils = require('../utils');
var bcrypt = require('bcrypt-as-promised');

var should = require('should');
var User = require('server/models').user;

var testUser = {
  name: 'Barack Obama',
  username: 'barackforpresident',
  email: 'me@whitehouse.com',
  password: 'supersecretpassword',
  roles: ['admin', 'mod']
};

describe('Users: models', () => {

  describe('#create()', () => {

    it('should create a new User', (done) => {

      User.create(testUser, (err, createdUser) => {
        should.not.exist(err);
        createdUser.name.should.equal('Barack Obama');
        createdUser.username.should.equal('barackforpresident');
        createdUser.email.should.equal('me@whitehouse.com');
        done();
      });

    });

    it('should hash password asynchronously on saving', (done) => {

      testUser.password[0].should.not.equal('$');
      testUser.password.length.should.not.equal(60);

      User.create(testUser, (err, createdUser) => {
        should.not.exist(err);
        createdUser.password[0].should.equal('$');
        createdUser.password.length.should.equal(60);
        done();
      });

    });

  })

  describe('#comparePasswordAndHash()', () => {

    it('should return true if password is valid', (done) => {

      const passwordProvided = 'supersecretpassword';

      User.create(testUser, (err, createdUser) => {
        should.not.exist(err);
        createdUser.comparePassword(passwordProvided)
         .then ( (areEqual) => {
          areEqual.should.equal(true);
          done();
        })

      });

    });

    it('should return a bcrypt.MISMATCH_ERROR exception if password is invalid', (done) => {

      const passwordProvided = 'imahacker';

      User.create(testUser, (err, createdUser) => {
        should.not.exist(err);
        createdUser.comparePassword(passwordProvided)
         .catch( function(err) {
            const errConstructor = err.constructor;
            errConstructor.should.equal(bcrypt.MISMATCH_ERROR);
            done();
          })

      });

    });

  });

  describe('#hasRole ', () => {

    var user; //createdUser

    beforeEach( (done) => {

      User.create(testUser, (err, createdUser) => {
        user = createdUser;
        debug(user);
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