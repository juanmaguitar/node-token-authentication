let readToken = require('./methods/readToken');
let saveToken = require('./methods/saveToken');
let removeToken = require('./methods/removeToken');

function storage ( $localStorage, $sessionStorage  ) {

	const keyStorage = 'myApp-token';

	this.rememberMe = false;
	this.readToken = readToken.bind(this, keyStorage, $localStorage, $sessionStorage);
	this.saveToken = saveToken.bind(this, keyStorage, $localStorage, $sessionStorage);
	this.removeToken = removeToken.bind(this, keyStorage, $localStorage, $sessionStorage);

}

storage.$inject = [
	'$localStorage',
	'$sessionStorage'
];

module.exports = storage;