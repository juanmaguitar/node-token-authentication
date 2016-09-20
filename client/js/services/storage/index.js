let readToken = require('./methods/token/read');
let saveToken = require('./methods/token/save');
let removeToken = require('./methods/token/remove');

let getRememberMe = require('./methods/rememberMe/get');
let setRememberMe = require('./methods/rememberMe/set');

function storage ( $localStorage, $sessionStorage  ) {

	const keyStorageToken = 'myApp-token';
	const keyStorageRemember = 'myApp-rememberMe';

	this.getRememberMe = getRememberMe.bind(this, keyStorageRemember, $localStorage);
	this.setRememberMe = setRememberMe.bind(this, keyStorageRemember, $localStorage);

	this.readToken = readToken.bind(this, keyStorageToken, $localStorage, $sessionStorage);
	this.saveToken = saveToken.bind(this, keyStorageToken, $localStorage, $sessionStorage);
	this.removeToken = removeToken.bind(this, keyStorageToken, $localStorage, $sessionStorage);

}

storage.$inject = [
	'$localStorage',
	'$sessionStorage'
];

module.exports = storage;