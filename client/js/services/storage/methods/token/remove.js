function removeToken( keyStorage, $localStorage, $sessionStorage ) {
	const storage = !!this.getRememberMe() ? $localStorage : $sessionStorage;
	delete storage[keyStorage];

}

module.exports = removeToken;