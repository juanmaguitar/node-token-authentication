const angular = require('angular');
const ngRoute = require('angular-route');

const loginModule = require('./login');
const registerModule = require('./register');
const servicesModule = require('./services');

console.log(loginModule);

angular.module('myApp', [ngRoute, servicesModule, loginModule, registerModule])
