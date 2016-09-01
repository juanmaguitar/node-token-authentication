const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const apiRoutes = require('./routes/api')
const rootRoutes = require('./routes/root')

const app = express();

// serve angular app
app.use('/', express.static( `${__dirname}/../public`) );

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

app.use('/', rootRoutes);
app.use('/api', apiRoutes);

module.exports = app;