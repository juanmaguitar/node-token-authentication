function logout() {
	$window.localStorage.removeItem('myApp-token');
	$location.path( '/login' );
}

module.exports = logout;