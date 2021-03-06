// const submit = require('./submit.js');
// const logout = require('./logout.js');
// const callRestricted = require('./callRestricted.js');

const ERR_SOMETHING_DUPLICATED = 0;
const ERR_USER_DUPLICATED = 1;
const ERR_MAIL_DUPLICATED = 2;

function registerController($scope, $http, $window) {


  $scope.createUser = function() {
    $scope.errors = {};

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

        $scope.errors.usernameExists = (err.data.code === ERR_USER_DUPLICATED);
        $scope.errors.mailExists = (err.data.code == ERR_MAIL_DUPLICATED);
        console.log(err)
    });

  }

}

registerController.$inject = ['$scope', '$http', '$window']

module.exports = registerController;
