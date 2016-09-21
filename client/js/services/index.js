const angular = require('angular');
const ngJwt = require('angular-jwt');

const authInterceptor = require('./authInterceptor');
const authService = require('./authService');
const storageService = require('./storage');

const authModule = angular.module('myApp:services',[ ngJwt ])
	.factory('authInterceptor', authInterceptor)
	.service('storageService', storageService)
	.service('authService', authService)

module.exports = authModule.name;