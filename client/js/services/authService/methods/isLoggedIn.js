function isLoggedIn( storageService, jwtHelper ) {
	try {
		var token = storageService.readToken();
		var tokenPayload = jwtHelper.decodeToken( token );
		return !( jwtHelper.isTokenExpired( token ) )
	} catch( e ) {
		return false
	}
}

module.exports = isLoggedIn;