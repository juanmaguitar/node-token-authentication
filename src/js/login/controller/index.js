const login = require('./login.js');
const logout = require('./logout.js');
const callRestricted = require('./callRestricted.js');

function loginController($scope, $http, $window) {

  const username = 'juanmaguitar';
  const password = 'juanma100';

  $scope.user = { username, password };
  $scope.isAuthenticated = false;
  $scope.welcome = '';
  $scope.message = '';

  $scope.login = login.bind(null, $scope, $window, $http);
  $scope.logout = logout.bind(null, $scope, $window);
  $scope.callRestricted = callRestricted.bind(null, $scope, $http);

}

loginController.$inject = ['$scope', '$http', '$window']

module.exports = loginController;
