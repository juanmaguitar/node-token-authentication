const debug = require('debug')('bin:www');

global.rootRequire = function(name) {
    return require(__dirname + '/' + name);
}

const app = rootRequire('server/app');
const db = rootRequire('db');

require('dotenv').config({ path: `${__dirname}/../../.env` }); // load ENV variables

debug(`SECRET=${process.env.SECRET}`)
debug(`DB_URI=${process.env.DB_URI}`)

var PORT = process.env.PORT || 8080;
var DB_URI = process.env.DB_URI;

db.connect(DB_URI);
app.listen(PORT);

console.log(`Magic happens at http://localhost: ${PORT}`);