function logout( $localStorage, $rootScope, $location) {

	delete $localStorage['myApp-token'];
	delete $rootScope.loggedUser;
	$location.path( '/login' );
}

module.exports = logout;