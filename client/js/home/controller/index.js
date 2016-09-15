function homeController($scope, authService) {

  const username = 'juanmaguitar';
  const password = 'juanma100';

  $scope.user = { username, password };
  console.log( `logged as ${$scope.user.username}` )
  console.log(authService);
  $scope.logout = authService.logout;

}

homeController.$inject = ['$scope', 'authService']

module.exports = homeController;
