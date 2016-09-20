function getRememberMe( keyStorage, $localStorage ) {
	return $localStorage[keyStorage];
}

module.exports = getRememberMe;