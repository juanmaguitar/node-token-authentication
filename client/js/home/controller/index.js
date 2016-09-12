function homeController($scope) {

  const username = 'juanmaguitar';
  const password = 'juanma100';

  $scope.user = { username, password };

}

homeController.$inject = ['$scope']

module.exports = homeController;
