const angular = require('angular');

// dependencies
const ngRoute = require('angular-route');
const appServices = require('../services');

const homeController = require('./controller')
const homeConfig = require('./config')

const homeModule = angular.module('myApp:home', [ ngRoute, appServices])
	.controller( 'homeController', homeController )
	.config( homeConfig )

module.exports = homeModule.name;