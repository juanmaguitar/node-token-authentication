// const submit = require('./submit.js');
// const logout = require('./logout.js');
// const callRestricted = require('./callRestricted.js');

function registerController($scope, $http, $window) {

  // const name = 'Nick Cerminara';
  // const password = 'password';

  // $scope.user = { name, password };
  // $scope.isAuthenticated = false;
  // $scope.welcome = '';
  // $scope.message = '';

  // $scope.submit = submit.bind(null, $scope, $window, $http);
  // $scope.logout = logout.bind(null, $scope, $window);
  // $scope.callRestricted = callRestricted.bind(null, $scope, $http);

}

registerController.$inject = ['$scope', '$http', '$window']

module.exports = registerController;
