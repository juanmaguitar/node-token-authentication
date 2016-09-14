function run ( $rootScope, $location, authService ) {

	const redirectIfLogged = () => {

		const isLogged = authService.isLoggedIn();

		console.log('isLogged?');
		console.log(isLogged);

		if ( !authService.isLoggedIn() ) {
				$location.path( 'login' )
		}
		else {
			console.log("you're logged!!...");
		}
	}


	console.log("---->>>> run....")
	if ( $location.path() !== 'login' ) {
		redirectIfLogged();
	}

	$rootScope.$on( '$routeChangeStart', function( event, nextRoute, currentRoute ) {
		console.log("---->>>> $routeChangeStart")
		console.log(event);
		console.log(nextRoute);
		console.log(currentRoute);
		redirectIfLogged();
	})

}

run.$inject = [ '$rootScope', '$location', 'authService' ];
module.exports = run;