const express = require('express');
const rootRoutes = express.Router();

const setup = require('./handlers/setup')
const addNewUser = require('./handlers/addNewUser')

rootRoutes.get('/setup', setup);
rootRoutes.post('/users', addNewUser);

module.exports = rootRoutes;