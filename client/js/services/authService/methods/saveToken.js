function saveToken( $localStorage, token ) {
	$localStorage['myApp-token'] = token;
	console.log( 'Token saved' );
	//setCredentials( token );
	return token;
}

module.exports = saveToken;