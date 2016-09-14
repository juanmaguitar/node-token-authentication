const angular = require('angular');
const ngStorage = require('ng-storage') && 'ngStorage';
const ngJwt = require('angular-jwt');

const authInterceptor = require('./authInterceptor');
const authService = require('./authService');

console.log(ngStorage)
console.log(ngJwt)

const authModule = angular.module('myApp:services',[ ngStorage, ngJwt ])
	.factory('authInterceptor', authInterceptor)
	.factory('authService', authService)

module.exports = authModule.name;