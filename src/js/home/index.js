const angular = require('angular');
const ngRoute = require('angular-route');

const homeController = require('./controller')
const homeConfig = require('./config')

const homeModule = angular.module('myApp:home', ['ngRoute'])
	.controller( 'homeController', homeController )
	.config( homeConfig )

module.exports = homeModule.name;