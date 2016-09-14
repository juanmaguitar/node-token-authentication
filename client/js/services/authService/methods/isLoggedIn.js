function isLoggedIn($localStorage, jwtHelper) {

	try {
		console.log('isLoggedIn (getting token)...');
		var token = $localStorage['myApp-token'];
		console.log(`isLoggedIn (token) → ${token}`)
		var tokenPayload = jwtHelper.decodeToken( token );
		return !( jwtHelper.isTokenExpired( token ) )
	} catch( e ) {
		return false
	}
}

module.exports = isLoggedIn;