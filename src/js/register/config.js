const fs = require('fs');
const htmlTemplate = fs.readFileSync(__dirname + '/template.html', 'utf8');

function config($routeProvider) {
  $routeProvider
  	.when('/register', {
  		template : htmlTemplate,
  		controller: 'registerController'
  	})
}

config.$inject = ['$routeProvider']

module.exports = config;