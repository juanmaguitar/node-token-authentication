const express = require('express');
const expressJwt = require('express-jwt');
const debug = require('debug')('routes:api');

const apiRoutes = express.Router();

const authenticate = require('./handlers/authenticate');
// const showWelcome = require('./handlers/showWelcome')
// const getAllUsers = require('./handlers/getAllUsers')
// const check = require('./handlers/check')

const SECRET = require('config').secret;

apiRoutes.post('/authenticate', authenticate);

// authenticated routes
apiRoutes.use('/', expressJwt({ secret: SECRET }) ); //
// apiRoutes.get('/', showWelcome);
// apiRoutes.get('/users', getAllUsers);
// apiRoutes.get('/check', check);

module.exports = apiRoutes;