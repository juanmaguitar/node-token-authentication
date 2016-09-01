const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const config = require('./config'); // get our config file

const apiRoutes = require('./routes/api')
const rootRoutes = require('./routes/root')

mongoose.Promise = global.Promise;

const app = express();

// configuration
var port = process.env.PORT || 8080;
mongoose.connect(config.database);

// serve angular app
app.use('/', express.static( `${__dirname}/../public`) );

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

app.use('/', rootRoutes);
app.use('/api', apiRoutes);

// start the server
app.listen(port);
console.log('Magic happens at http://localhost:' + port);

module.exports = app;
