const angular = require('angular');
const ngRoute = require('angular-route');

const registerController = require('./controller')
const registerConfig = require('./config')

angular.module('myApp:register', ['ngRoute'])
	.controller( 'registerController', registerController )
	.config( registerConfig )

module.exports = 'myApp:register';