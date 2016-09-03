const angular = require('angular');

const authInterceptor = require('./authInterceptor');

angular.module('myApp:services',[])
	.factory('authInterceptor', authInterceptor)
	.config( function($httpProvider, $routeProvider) {
		$httpProvider.interceptors.push('authInterceptor');
		$routeProvider.otherwise('/login');
	});

module.exports = 'myApp:services';