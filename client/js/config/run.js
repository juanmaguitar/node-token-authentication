function run ( $rootScope, $location, authService ) {

	$rootScope.$on( '$routeChangeStart', function( event, nextRoute, currentRoute ) {

		const currentPath = $location.path();

		if ( !['/login','/register'].includes( currentPath ) ) {
			$location.path( !authService.isLoggedIn() ? 'login' : 'home' );
		}

	})
}

run.$inject = [ '$rootScope', '$location', 'authService' ];
module.exports = run;