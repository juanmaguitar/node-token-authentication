const angular = require('angular');
const ngRoute = require('angular-route');

const loginModule = require('./login');
const registerModule = require('./register');
const homeModule = require('./home');

const servicesModule = require('./services');
const appConfig = require('./config.js');

const moduleDependencies = [
	ngRoute,
	servicesModule,
	loginModule,
	registerModule,
	homeModule
];

angular.module('myApp', moduleDependencies)
	.config( appConfig )
