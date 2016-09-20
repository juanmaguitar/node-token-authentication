function run ( $rootScope, $location, authService, storageService ) {


	const redirectIfLogged = ( nextRoute ) => {
		if ( !['/login','/register'].includes( $location.path() ) ) {
			if ( authService.isLoggedIn() ) {
				const token = storageService.readToken();
				authService.setCredentials(token)
				$location.path( nextRoute ? nextRoute.$$route.originalPath : 'home');
			}
			else {
				$location.path( 'login');
			}

		}
	}

	$rootScope.$on( '$routeChangeStart', function( event, nextRoute, currentRoute ) {
		redirectIfLogged(nextRoute);
	})

	redirectIfLogged();

}

run.$inject = [ '$rootScope', '$location', 'authService', 'storageService' ];
module.exports = run;