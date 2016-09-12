function login( user ) {
  return $http.post('/api/authenticate', user)
}

module.exports = login;
