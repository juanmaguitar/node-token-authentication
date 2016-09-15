let login = require('./methods/login');
let logout = require('./methods/logout');
let saveToken = require('./methods/saveToken')
let isLoggedIn = require('./methods/isLoggedIn')

function authService ( $http, $localStorage, $rootScope, jwtHelper, $location ) {

	login = login.bind(null, $http, $rootScope, jwtHelper);
	logout = logout.bind(null, $localStorage, $rootScope, $location);
	saveToken = saveToken.bind(null, $localStorage);
	isLoggedIn = isLoggedIn.bind(null, $localStorage, jwtHelper);

	return { login, logout, saveToken, isLoggedIn }

}

authService.$inject = [
	'$http',
	'$localStorage',
	'$rootScope',
	'jwtHelper',
	'$location'
];

module.exports = authService;