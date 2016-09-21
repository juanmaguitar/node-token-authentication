const debug = require('debug')('test:models:user');
var utils = require('../utils');
var bcrypt = require('bcrypt-as-promised');

var should = require('should');
var request = require('supertest');
var User = require('server/models').user;
var app = require('../../server/app');

var testUser = {
  name: 'Barack Obama',
  username: 'barackforpresident',
  email: 'me@whitehouse.com',
  password: 'supersecretpassword',
  roles: ['admin', 'mod']
};

describe('Routes: /', function () {

  describe('POST /users', () => {

    it('should create a new User', (done) => {

      request(app)
        .post('/users')
        .send( { user: testUser } )
        .expect('Content-Type', /json/)
        .expect(200, {"success":true }, done);

    });

    it('should return error if the user already exists', (done) => {

      request(app)
        .post('/users')
        .send( { user: testUser } )
        .end( ()=> {
          request(app)
            .post('/users')
            .send( { user: testUser } )
            .expect('Content-Type', /json/)
            .expect(500, done)
        })

    });

  })

});