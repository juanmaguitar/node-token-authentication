function login( $http, user ) {

  return $http.post('/api/authenticate', user)
  					.then( (data) => {
  							console.log("auth.login...")
  							console.log(data);
  							return data.data.token;
  					})

}

module.exports = login;
