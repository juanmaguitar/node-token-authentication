var mongoose = require('mongoose');
var bcrypt = require('bcrypt-as-promised');
const debug = require('debug')('schemas:user');

var Schema = mongoose.Schema;

var BCRYPT_COST = (process.env.NODE_ENV === 'test') ? 1 : 12;

const emailSchema = new Schema({
  type  : {type: String},
  value : String
});

const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  emails: [emailSchema],
  roles: Array
});

userSchema.pre('save', function(next) {
  const user = this;

  if (!user.isModified('password')) return next();

  bcrypt.hash(user.password, BCRYPT_COST)
    .then( (hash) => {
      debug(hash);
      user.password = hash;
      next();
    })

});



userSchema.statics.hashPassword = function (passwordRaw) {
  debug(`BCRYPT_COST=${BCRYPT_COST}`);
  return bcrypt.hash(passwordRaw, BCRYPT_COST);
};

userSchema.statics.comparePasswordAndHash = (password, passwordHash) => {
  return bcrypt.compare(password, passwordHash);
};

userSchema.methods.hasRole = function(role) {
  return this.roles.includes(role);
}

module.exports = userSchema;