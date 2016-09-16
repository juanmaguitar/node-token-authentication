const login = require('./login.js');

function loginController($scope, $location, authService) {

  const username = 'juanmaguitar';
  const password = 'juanma100';

  $scope.user = { username, password };
 	$scope.login = login.bind(null, $scope, $location, authService );

}

loginController.$inject = ['$scope', '$location', 'authService']

module.exports = loginController;
