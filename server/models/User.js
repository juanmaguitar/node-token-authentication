const mongoose = require('mongoose');
const schema = require('./schemas/user')

var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('User', new Schema(schema));