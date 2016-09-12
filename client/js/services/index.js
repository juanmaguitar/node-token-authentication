const angular = require('angular');
const ngStorage = require('ng-storage');
const ngJwt = require('angular-jwt'),

const authInterceptor = require('./authInterceptor');
const authService = require('./authService');

angular.module('myApp:services',[ ngStorage, ngJwt ])
	.factory('authInterceptor', authInterceptor)
	.factory('authService', authService)

module.exports = 'myApp:services';