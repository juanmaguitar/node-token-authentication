function logout( storageService, $rootScope, $location) {

	storageService.removeToken();
	delete $rootScope.loggedUser;
	$location.path( '/login' );
}

module.exports = logout;