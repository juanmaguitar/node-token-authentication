var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const debug = require('debug')('schemas:user');

var Schema = mongoose.Schema;

var BCRYPT_COST = 12;

const emailSchema = new Schema({
  type  : {type: String},
  value : String
});

const userSchema = new Schema({
  name: {
    firstname: String,
    surname: String
  },
  username: String,
  passwordHash: String,
  emails: [emailSchema],
  roles: Array
});

userSchema.statics.hashPassword = function (passwordRaw, fn) {
  if (process.env.NODE_ENV === 'test') {
    BCRYPT_COST = 1;
  }
  bcrypt.hash(passwordRaw, BCRYPT_COST, fn);
};

userSchema.statics.comparePasswordAndHash = (password, passwordHash, fn) => {
  return bcrypt.compare(password, passwordHash, fn);
};

userSchema.methods.hasRole = function(role) {
  debug(this);
  debug(role);
  return this.roles.includes(role);
}

module.exports = userSchema;