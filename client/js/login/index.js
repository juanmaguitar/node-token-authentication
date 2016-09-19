const angular = require('angular');
const ngRoute = require('angular-route');
const appServices = require('../services');

const loginController = require('./controller')
const loginConfig = require('./config')

const loginModule = angular.module('myApp:login', [ ngRoute, appServices ])
	.controller( 'loginController', loginController )
	.config( loginConfig )

module.exports = loginModule.name;