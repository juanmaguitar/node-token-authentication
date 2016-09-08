const angular = require('angular');
const ngStorage = require('ng-storage');

const authInterceptor = require('./authInterceptor');

angular.module('myApp:services',['ngStorage'])
	.factory('authInterceptor', authInterceptor)
	.config( function($httpProvider, $routeProvider) {
		$httpProvider.interceptors.push('authInterceptor');
		$routeProvider.otherwise('/login');
	});

module.exports = 'myApp:services';