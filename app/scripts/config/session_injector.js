  'use strict';

angular.module('fantasyadminApp').factory('sessionInjector', ['sessionService', function(sessionService) {
    var sessionInjector = {
        request: function(config) {
            if (!sessionService.isAnonymus()) {
                config.headers['x-session-token'] = sessionService.getAccessToken();
            }
            return config;
        }
    };
    return sessionInjector;
}]);
angular.module('fantasyadminApp').config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('sessionInjector');
}]);