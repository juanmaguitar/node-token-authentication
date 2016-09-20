const angular = require('angular');
const ngRoute = require('angular-route');

require('./styles.scss');

const loginModule = require('./login');
const registerModule = require('./register');
const homeModule = require('./home');

const servicesModule = require('./services');
const appConfig = require('./config/config.js');
const appRun = require('./config/run.js');

const moduleDependencies = [
	ngRoute,
	servicesModule,
	loginModule,
	registerModule,
	homeModule
];

angular.module('myApp', moduleDependencies)
	.config( appConfig )
	.run( appRun )
