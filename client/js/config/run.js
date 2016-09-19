function run ( $rootScope, $location, authService ) {

	const redirectIfLogged = () => {
		if ( !['/login','/register'].includes( $location.path() ) ) {
			$location.path( authService.isLoggedIn() ? 'home' : 'login' );
		}
	}

	$rootScope.$on( '$routeChangeStart', function( event, nextRoute, currentRoute ) {
		// console.log(event);
		// console.log(nextRoute);
		// console.log(currentRoute);
		const nextPath = nextRoute.$$route.originalPath;
		$location.path( authService.isLoggedIn() ? nextPath : 'login' );
		//redirectIfLogged();
	})

	redirectIfLogged();

}

run.$inject = [ '$rootScope', '$location', 'authService' ];
module.exports = run;