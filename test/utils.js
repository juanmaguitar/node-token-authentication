const debug = require('debug')('test:utils');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

require('dotenv').config({ path: `${__dirname}/../.env`})
debug(`Using Test DB: ${process.env.DB_URI_TEST}`);

global.rootRequire = function(name) {
    return require(__dirname + '/../' + name);
}

beforeEach( (done) => {

  const dbCollections = mongoose.connection.collections;
  const dbState = mongoose.connection.readyState;

  const clearDB = () => {
    for ( const collection in dbCollections ) {
      dbCollections[collection].remove()
    }
    return done();
  }

  const reconnect = () => {
    mongoose.connect( process.env.DB_URI_TEST, (err) => {
      if (err) throw err;
      return clearDB();
    });
  }


  const checkState = () => {
    switch (dbState) {
    case 0:
      reconnect();
      break;
    case 1:
      clearDB();
      break;
    default:
      process.nextTick(checkState);
    }
  }

  checkState();
});


afterEach( (done) => {
  mongoose.disconnect();
  return done();
});