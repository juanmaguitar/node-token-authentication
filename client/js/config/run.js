function run ( $rootScope, $location, authService ) {

	const redirectIfLogged = () => {
		const isLogged = authService.isLoggedIn();
		$location.path( !authService.isLoggedIn() ? 'login' : 'home' );
	}

	if ( $location.path() !== 'login' ) {
		redirectIfLogged();
	}

	$rootScope.$on( '$routeChangeStart', function( event, nextRoute, currentRoute ) {
		redirectIfLogged();
	})

}

run.$inject = [ '$rootScope', '$location', 'authService' ];
module.exports = run;