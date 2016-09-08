function request($window, config) {
  config.headers = config.headers || {};

	console.log('%c request...', 'background: yellow; color: #000');
	console.log($window.sessionStorage);
	console.log(config);
	console.log(`%c ${$window.sessionStorage.token}...`, 'background: red; color: #FFF');

  if ($window.sessionStorage.token) {
    config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
  }
  return config;
}

module.exports = request;
