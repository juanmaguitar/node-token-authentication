function setCredentials( $rootScope, jwtHelper, token ) {

	$rootScope.loggedUser = {};
	var tokenPayload = jwtHelper.decodeToken( token );

	$rootScope.loggedUser.username = tokenPayload.username;
	$rootScope.loggedUser.email = tokenPayload.email;
	$rootScope.loggedUser.roles = tokenPayload.roles;

	return token;

}

module.exports = setCredentials;

