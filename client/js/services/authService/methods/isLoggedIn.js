function isLoggedIn($localStorage, jwtHelper) {

	try {
		var token = $localStorage['myApp-token'];
		var tokenPayload = jwtHelper.decodeToken( token );
		return !( jwtHelper.isTokenExpired( token ) )
	} catch( e ) {
		return false
	}
}

module.exports = isLoggedIn;