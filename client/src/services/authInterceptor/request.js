function request($window, config) {
  config.headers = config.headers || {};
  if ($window.sessionStorage.token) {
    config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
  }
  return config;
}

module.exports = request;
