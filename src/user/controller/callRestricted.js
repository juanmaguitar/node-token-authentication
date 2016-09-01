function callRestricted( $scope, $http ) {

  const url = '/api/users';
  const method = 'GET';

  $http( { url, method } )
    .success( (data /*, status, headers, config*/) => {
      console.log(data);
      $scope.message = `Users: ${data.length}`;
    })
    .error( (data /*, status, headers, config*/) => {
      alert(data);
    });
}

module.exports = callRestricted;
