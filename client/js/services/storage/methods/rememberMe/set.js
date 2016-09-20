function setRememberMe( keyStorage, $localStorage, value ) {
	$localStorage[keyStorage] = value;
	return value;
}

module.exports = setRememberMe;