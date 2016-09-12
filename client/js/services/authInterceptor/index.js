const request = require('./methods/request.js')
const responseError = require('./methods/responseError.js')

function authInterceptor($q, $window, $localStorage) {
  return {
    request: request.bind(null, $window),
    responseError: responseError.bind(null, $q)
  }
}

authInterceptor.$inject = ['$q', '$location', '$localStorage']

module.exports = authInterceptor;
