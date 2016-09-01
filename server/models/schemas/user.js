var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var BCRYPT_COST = 12;

const emailSchema = new Schema({
  type  : {type: String},
  value : String
});

const userSchema = new Schema({
  name: String,
  surname: String,
  username: String,
  emails: [emailSchema],
  passwordHash: String,
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

userSchema.methods.hasRole = (role) => {
  return this.roles.includes(role);
}

module.exports = userSchema;