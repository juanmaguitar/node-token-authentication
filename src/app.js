const angular = require('angular');

const UserCtrl = require('./user/controller');
const authInterceptor = require('./services/authInterceptor')

angular.module('myApp', [])
	.controller('UserCtrl', UserCtrl)
	.factory('authInterceptor', authInterceptor)
	.config( ($httpProvider) => {
    // http://onehungrymind.com/winning-http-interceptors-angularjs/
	  $httpProvider.interceptors.push('authInterceptor');
	});

