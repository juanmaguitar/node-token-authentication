function responseError($q, rejection) {

  console.log('%c responseError...', 'background: #222; color: #bada55');

  if (response.status === 401 || response.status === 403) {
    console.log("request rejected!");
    // handle the case where the user is not authenticated
  }
  return $q.reject(rejection);
}

module.exports = responseError;
