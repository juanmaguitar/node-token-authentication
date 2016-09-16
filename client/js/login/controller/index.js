const login = require('./login.js');
const logout = require('./logout.js');
const callRestricted = require('./callRestricted.js');

function loginController($scope, $http, $localStorage, $location, authService) {

  const username = 'juanmaguitar';
  const password = 'juanma100';

  $scope.user = { username, password };
 	$scope.login = login.bind(null, $scope, authService, $localStorage, $http, $location);

}

loginController.$inject = ['$scope', '$http', '$localStorage', '$location', 'authService']

module.exports = loginController;
