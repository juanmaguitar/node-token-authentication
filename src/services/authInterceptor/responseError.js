function responseError(rejection) {
  if (rejection.status === 401) {
    console.log("request rejected!");
    // handle the case where the user is not authenticated
  }
  return $q.reject(rejection);
}

module.exports = responseError;
