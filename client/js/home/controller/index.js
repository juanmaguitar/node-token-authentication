function homeController($scope, authService) {

  const username = 'juanmaguitar';
  const password = 'juanma100';

  $scope.user = { username, password };
  $scope.logout = authService.logout;

}

homeController.$inject = ['$scope', 'authService']

module.exports = homeController;
