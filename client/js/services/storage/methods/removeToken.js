function removeToken( keyStorage, $localStorage, $sessionStorage ) {

	const storage = this.rememberMe ? $localStorage : $sessionStorage;
	delete storage[keyStorage];

}

module.exports = removeToken;