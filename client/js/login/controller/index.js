const login = require('./login.js');

function loginController($scope, $location, authService, storageService) {

  const username = 'juanmaguitar';
  const password = 'juanma100';

	//$scope.rememberMe = storageService.getRememberMe();
  $scope.user = { username, password };
 	$scope.login = login.bind(null, $scope, $location, authService, storageService );

}

loginController.$inject = ['$scope', '$location', 'authService', 'storageService']

module.exports = loginController;
