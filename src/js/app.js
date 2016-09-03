const angular = require('angular');
const ngRoute = require('angular-route');

const loginModule = require('./login');
const servicesModule = require('./services');

angular.module('myApp', [ngRoute, servicesModule, loginModule])
