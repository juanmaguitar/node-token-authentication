// const url_base64_decode = require('../utils').url_base64_decode;

function submit( $scope, $localStorage, $http, $location ) {

  $http
    .post('/api/authenticate', $scope.user)
    .success( (data, status, headers, config) => {

      console.log("habemus token!")
      $localStorage.token = data.token;
      $scope.isAuthenticated = true;
      var encodedProfile = data.token.split('.')[1];
      var profile = JSON.parse(url_base64_decode(encodedProfile));
      console.log(profile);
      // $scope.welcome = `Welcome ${profile.name}`;
      // $scope.welcome += profile.admin ? ' (ADMIN)' : null;
      $location.path('home');
    })
    .error( (data, status, headers, config) => {
      // Erase the token if the user fails to log in
      delete $localStorage.token;
      $scope.isAuthenticated = false;

      // Handle login errors here
      $scope.error = 'Error: Invalid user or password';
      $scope.welcome = '';
    });

}

module.exports = submit