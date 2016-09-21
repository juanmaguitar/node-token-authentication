const request = require('./methods/request.js')
const responseError = require('./methods/responseError.js')

function authInterceptor($q, storageService) {
  return {
    request: request.bind(null, storageService ),
    responseError: responseError.bind(null, $q)
  }
}

authInterceptor.$inject = ['$q', 'storageService' ]

module.exports = authInterceptor;
