const angular = require('angular');
const ngStorage = require('ng-storage');

const authInterceptor = require('./authInterceptor');

angular.module('myApp:services',['ngStorage'])
	.factory('authInterceptor', authInterceptor)

module.exports = 'myApp:services';