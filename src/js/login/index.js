const angular = require('angular');
const ngRoute = require('angular-route');

const loginController = require('./controller')
const loginConfig = require('./config')

angular.module('myApp:login', ['ngRoute'])
	.controller( 'loginController', loginController )
	.config( loginConfig )

module.exports = 'myApp:login';