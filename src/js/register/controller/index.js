// const submit = require('./submit.js');
// const logout = require('./logout.js');
// const callRestricted = require('./callRestricted.js');

function registerController($scope, $http, $window) {


  $scope.createUser = function() {
    $scope.errors = {};
    console.log("creating user...")
    console.dir($scope.user)

    $http({
      url: '/users',
      method: "POST",
      data: { user: $scope.user }
    })
    .then( (data) => {
      $scope.errors = {};
      console.log("user created!");
      console.dir(data)
        //$scope.persons = data; // assign  $scope.persons here as promise is resolved here
    })
    .catch( (err) => {

        $scope.errors.usernameExists = (err.data.message == 'User already exist!');
        $scope.errors.mailExists = (err.data.message == 'Mail already exist!');
        console.log(err)
    });

  }
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
