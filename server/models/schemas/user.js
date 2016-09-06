const mongoose = require('mongoose');
const bcrypt = require('bcrypt-as-promised');
const debug = require('debug')('schemas:user');

var Schema = mongoose.Schema;

var BCRYPT_COST = (process.env.NODE_ENV === 'test') ? 1 : 12;

const userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  email: { type: String, required: true, index: true, unique: true },
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