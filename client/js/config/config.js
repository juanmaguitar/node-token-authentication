function config($httpProvider, $routeProvider) {
	$httpProvider.interceptors.push('authInterceptor');
};

config.$inject = ['$httpProvider', '$routeProvider']
module.exports = config;