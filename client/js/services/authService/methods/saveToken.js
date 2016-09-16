function saveToken( $localStorage, token ) {
	$localStorage['myApp-token'] = token;
	return token;
}

module.exports = saveToken;