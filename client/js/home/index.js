const angular = require('angular');

// dependencies
const ngRoute = require('angular-route');
const ngBootstrap = require('angular-bootstrap-npm');
const ngGravatar = require('angular-gravatar') && 'ui.gravatar';

console.log(ngGravatar);


const appServices = require('../services');

const homeController = require('./controller')
const homeConfig = require('./config')

const homeModule = angular.module('myApp:home', [ ngRoute, ngBootstrap, ngGravatar, appServices])
	.controller( 'homeController', homeController )
	.config( homeConfig )

module.exports = homeModule.name;