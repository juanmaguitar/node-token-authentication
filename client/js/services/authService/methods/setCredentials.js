function setCredentials( $rootScope, jwtHelper, token ) {
	console.log('setCredentials');
	$rootScope.loggedUser = {};
	var tokenPayload = jwtHelper.decodeToken( token );

	console.log(tokenPayload);
	// logged user credentials
	$rootScope.loggedUser.username = tokenPayload.username;
	$rootScope.loggedUser.email = tokenPayload.email;
	$rootScope.loggedUser.roles = tokenPayload.roles;
	console.log($rootScope.currentUser);
}

module.exports = setCredentials;