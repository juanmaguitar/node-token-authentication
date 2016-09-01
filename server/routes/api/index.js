const express = require('express');
const expressJwt = require('express-jwt');

const apiRoutes = express.Router();

const authenticate = require('./handlers/authenticate');
const showWelcome = require('./handlers/showWelcome')
const getAllUsers = require('./handlers/getAllUsers')
const check = require('./handlers/check')

const config = require('../../config'); // get our config file

apiRoutes.post('/authenticate', authenticate);

// authenticated routes
apiRoutes.use('/', expressJwt({  secret: config.secret }) ); //
apiRoutes.get('/', showWelcome);
apiRoutes.get('/users', getAllUsers);
apiRoutes.get('/check', check);

module.exports = apiRoutes;