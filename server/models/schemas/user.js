const mongoose = require('mongoose');
const bcrypt = require('bcrypt-as-promised');
const debug = require('debug')('schemas:user');

var Schema = mongoose.Schema;

var BCRYPT_COST = (process.env.NODE_ENV === 'test') ? 1 : 10;

const userSchema = new Schema({
  name: String,
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, select: false },
  email: { type: String, required: true, index: { unique: true } },
  roles: Array
});

console.log(BCRYPT_COST)

userSchema.pre('save', function(next) {

  if (!this.isModified('password')) return next();

  bcrypt.hash(this.password)
    .then( (hash) => {
        this.password = hash;
        next();
    })

});

userSchema.methods.comparePassword = function(candidatePassword) {
  console.log('userSchema.methods.comparePassword => ' + candidatePassword)
  console.log(this)
  console.log(candidatePassword);
  console.log(this.password);
  return bcrypt.compare(candidatePassword, this.password);
}

userSchema.methods.hasRole = function(role) {
  return this.roles.includes(role);
}

module.exports = userSchema;