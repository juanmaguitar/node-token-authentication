function saveToken( keyStorage, $localStorage, $sessionStorage, token ) {

	delete $sessionStorage[keyStorage];
	delete $localStorage[keyStorage];

	const storage = this.rememberMe ? $localStorage : $sessionStorage;
	storage[keyStorage] = token;

	return token;

}

module.exports = saveToken;