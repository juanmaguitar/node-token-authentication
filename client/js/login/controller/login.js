function login( $scope, $location, authService, storageService ) {

  storageService.rememberMe = $scope.rememberMe;

  authService.login( $scope.user )
    .then( storageService.saveToken )
    .then( authService.setCredentials )
    .then( () => {
      console.log('redirecting...');
      $location.path( 'home' )
    })
    .catch( (error) => {
      const message = error.data.message;
      $scope.error = { message }
      console.log(error);
    })

}

module.exports = login