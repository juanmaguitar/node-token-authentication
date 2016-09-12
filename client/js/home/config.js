const fs = require('fs');
const htmlTemplate = fs.readFileSync(__dirname + '/template.html', 'utf8');

function config($routeProvider) {
  $routeProvider
  	.when('/home', {
  		template : htmlTemplate,
  		controller: 'homeController'
  	})

}

config.$inject = ['$routeProvider']

module.exports = config;