const fs = require('fs');
const htmlTemplate = fs.readFileSync(__dirname + '/template.html', 'utf8');

function config($routeProvider) {
  $routeProvider
  	.when('/login', {
  		template : htmlTemplate,
  		controller: 'loginController'
  	})
}

config.$inject = ['$routeProvider']

module.exports = config;