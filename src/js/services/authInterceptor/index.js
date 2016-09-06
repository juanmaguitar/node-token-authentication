const request = require('./request.js')
const responseError = require('./responseError.js')

function authInterceptor($q, $window) {
  return {
    request: request.bind(null, $window),
    responseError: responseError.bind(null, $q)
  }
}

authInterceptor.$inject = ['$q', '$window']

module.exports = authInterceptor;
