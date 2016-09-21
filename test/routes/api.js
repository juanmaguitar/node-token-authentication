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

describe('Routes: /api', function () {

  describe('POST /authenticate', () => {

     it('should return a token for valid credentials', (done) => {

        request(app)
          .post('/users')
          .send( { user: testUser } )
          .end( ()=> {
            request(app)
              .post('/api/authenticate')
              .send( testUser )
              .expect('Content-Type', /json/)
              .expect(200)
              .end( (err, response) => {

                should.not.exist(err);

                const success = response.body.success;
                const message = response.body.message;
                const token = response.body.token;

                success.should.equal(true);
                message.should.equal('Enjoy your token!');
                token.split(".").length.should.equal(3)

                done();
              });

          })

     })

      it('should return an error for NOT valid credentials', (done) => {

        request(app)
          .post('/users')
          .send( { user: testUser } )
          .end( ()=> {
            request(app)
              .post('/api/authenticate')
              .send( { username: "aaaaa", password: "aaaaaa"} )
              .expect('Content-Type', /json/)
              .expect(404)
              .end( (err, response) => {

                should.not.exist(err);

                const success = response.body.success;
                const message = response.body.message;

                success.should.equal(false);
                message.should.equal('Credentials not valid');

                done();
              });

          })

     })

  })

});