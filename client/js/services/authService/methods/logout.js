function logout() {
	$window.localStorage.removeItem( 'mean-token' );
	$location.path( '/' );
	console.log( 'logout bye...' )
}