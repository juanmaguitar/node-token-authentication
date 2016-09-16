function login( $http, $rootScope, jwtHelper, user ) {

  return $http.post('/api/authenticate', user)
  					.then( data => data.data.token )

}

module.exports = login;
