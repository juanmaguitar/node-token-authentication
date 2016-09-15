function setCredentials( $rootScope, jwtHelper, token ) {

	$rootScope.loggedUser = {};
	var tokenPayload = jwtHelper.decodeToken( token );

	$rootScope.loggedUser.username = tokenPayload.username;
	$rootScope.loggedUser.email = tokenPayload.email;
	$rootScope.loggedUser.roles = tokenPayload.roles;

	return token;

}

function login( $http, $rootScope, jwtHelper, user ) {

	setCredentials = setCredentials.bind(null, $rootScope, jwtHelper);

  return $http.post('/api/authenticate', user)
  					.then( data => data.data.token )
  					.then( setCredentials )

}

module.exports = login;
