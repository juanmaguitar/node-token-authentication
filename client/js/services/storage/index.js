let readToken = require('./methods/token/read');
let saveToken = require('./methods/token/save');
let removeToken = require('./methods/token/remove');

let getRememberMe = require('./methods/rememberMe/get');
let setRememberMe = require('./methods/rememberMe/set');

function storage ( $window  ) {

	const keyToken = 'myApp-token';
	const keyRemember = 'myApp-rememberMe';

	console.log ($window );

	const $localStorage = $window.localStorage;
	const $sessionStorage = $window.sessionStorage;

	this.getRememberMe = getRememberMe.bind(this, keyRemember, $localStorage);
	this.setRememberMe = setRememberMe.bind(this, keyRemember, $localStorage);

	this.readToken = readToken.bind(this, keyToken, $localStorage, $sessionStorage);
	this.saveToken = saveToken.bind(this, keyToken, $localStorage, $sessionStorage);
	this.removeToken = removeToken.bind(this, keyToken, $localStorage, $sessionStorage);

}

storage.$inject = [
	'$window'
];

module.exports = storage;