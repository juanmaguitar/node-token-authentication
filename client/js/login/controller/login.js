function login( $scope, $location, authService ) {

  authService.login( $scope.user )
    .then( authService.saveToken )
    .then( authService.setCredentials )
    .then( () => $location.path( 'home' ) )
    .catch( (error) => {
      const message = error.data.message;
      $scope.error = { message }
      console.log(error);
    })

}

module.exports = login