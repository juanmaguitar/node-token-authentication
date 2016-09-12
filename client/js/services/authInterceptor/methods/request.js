function request($localStorage, config) {
  config.headers = config.headers || {};

	if ($localStorage.token) {
    config.headers.Authorization = 'Bearer ' + $$localStorage.token;
  }
  else {
  	console.log('no token detected...')
  }
  return config;
}


module.exports = request;
