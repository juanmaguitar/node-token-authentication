function logout( $localStorage, $rootScope, $location) {
	console.log('before...');
	console.log($localStorage);
	console.log($rootScope);
	delete $localStorage['myApp-token'];
	delete $rootScope.loggedUser;
	console.log('after...');
	console.log($localStorage);
	console.log($rootScope);
	$location.path( '/login' );
}

module.exports = logout;