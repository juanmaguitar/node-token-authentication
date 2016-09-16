function responseError($q, rejection) {

  console.log('%c responseError...', 'background: #222; color: #bada55');
  console.log(rejection);

  if (rejection.status === 404 ) {
    console.log("Credentials not valid");
    // handle the case where the user is not authenticated
  }
  return $q.reject(rejection);
}

module.exports = responseError;
