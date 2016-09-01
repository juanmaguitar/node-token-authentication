const express = require('express');
const rootRoutes = express.Router();

const setup = require('./handlers/setup')

rootRoutes.get('/setup', setup);

module.exports = rootRoutes;