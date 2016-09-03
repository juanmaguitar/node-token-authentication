const debug = require('debug')('bin:www');

const app = require('server/app');
const db = require('db');

const config = require('config');

var PORT = process.env.PORT || 8080;
var DB_URI = config.db_uri;

db.connect(DB_URI);
app.listen(PORT);

console.log(`Magic happens at http://localhost: ${PORT}`);