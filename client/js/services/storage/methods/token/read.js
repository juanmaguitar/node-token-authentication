function readToken( keyStorage, $localStorage, $sessionStorage ) {
	const storage = !!this.getRememberMe() ? $localStorage : $sessionStorage;
	return storage[keyStorage];
}

module.exports = readToken;