function readToken( keyStorage, $localStorage, $sessionStorage ) {
	const storage = !!this.getRememberMe() ? $localStorage : $sessionStorage;
	console.log(`readToken |  !!this.getRememberMe() → ${!!this.getRememberMe()}`)
	console.log(`readToken |  keyStorage → ${keyStorage}`)
	return storage[keyStorage];
}

module.exports = readToken;