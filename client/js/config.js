function config($httpProvider, $routeProvider) {
	$httpProvider.interceptors.push('authInterceptor');
	$routeProvider.otherwise('/login');
};

config.$inject = ['$httpProvider', '$routeProvider']
module.exports = config;