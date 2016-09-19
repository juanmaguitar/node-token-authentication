function readToken( keyStorage, $localStorage, $sessionStorage ) {

	const storage = this.rememberMe ? $localStorage : $sessionStorage;
	return storage[keyStorage];

}

module.exports = readToken;