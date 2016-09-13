function isLoggedIn(jwtHelper) {
	try {
		var token = getToken();
		var tokenPayload = jwtHelper.decodeToken( token );
		return !( jwtHelper.isTokenExpired( token ) )
	} catch( e ) {
		return false
	}
}

module.exports = isLoggedIn;