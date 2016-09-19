let login = require('./methods/login');
let logout = require('./methods/logout');
let isLoggedIn = require('./methods/isLoggedIn')
let setCredentials = require('./methods/setCredentials')

function authService ( $http, storageService, $rootScope, jwtHelper, $location ) {

	this.login = login.bind(null, $http, $rootScope, jwtHelper);
	this.logout = logout.bind(null, storageService, $rootScope, $location);
	this.isLoggedIn = isLoggedIn.bind(null, storageService, jwtHelper);
	this.setCredentials = setCredentials.bind(null, $rootScope, jwtHelper);

}

authService.$inject = [
	'$http',
	'storageService',
	'$rootScope',
	'jwtHelper',
	'$location'
];

module.exports = authService;