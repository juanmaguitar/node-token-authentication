function logout( $scope, $localStorage ) {

  $scope.welcome = '';
  $scope.message = '';
  $scope.isAuthenticated = false;
  delete $localStorage.token;

}

module.exports = logout;