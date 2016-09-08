const angular = require('angular');
const ngRoute = require('angular-route');
const ngStorage = require('ng-storage');

const loginController = require('./controller')
const loginConfig = require('./config')

angular.module('myApp:login', ['ngRoute', 'ngStorage'])
	.controller( 'loginController', loginController )
	.config( loginConfig )

module.exports = 'myApp:login';