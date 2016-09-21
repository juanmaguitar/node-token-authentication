function request(storageService, config) {
  config.headers = config.headers || {};
	const token = storageService.readToken();

	if ( token ) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  else {
  	console.log('no token detected...')
  }
  return config;
}


module.exports = request;
