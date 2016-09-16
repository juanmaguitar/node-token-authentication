let login = require('./methods/login');
let logout = require('./methods/logout');
let saveToken = require('./methods/saveToken')
let isLoggedIn = require('./methods/isLoggedIn')
let setCredentials = require('./methods/setCredentials')

function authService ( $http, $localStorage, $rootScope, jwtHelper, $location ) {

	this.login = login.bind(null, $http, $rootScope, jwtHelper);
	this.logout = logout.bind(null, $localStorage, $rootScope, $location);
	this.saveToken = saveToken.bind(null, $localStorage);
	this.isLoggedIn = isLoggedIn.bind(null, $localStorage, jwtHelper);
	this.setCredentials = setCredentials.bind(null, $rootScope, jwtHelper);

}

authService.$inject = [
	'$http',
	'$localStorage',
	'$rootScope',
	'jwtHelper',
	'$location'
];

module.exports = authService;