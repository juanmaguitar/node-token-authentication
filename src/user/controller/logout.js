function logout( $scope, $window ) {

  $scope.welcome = '';
  $scope.message = '';
  $scope.isAuthenticated = false;
  delete $window.sessionStorage.token;

}

module.exports = logout;