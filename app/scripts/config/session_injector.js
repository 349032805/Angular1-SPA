  'use strict';

angular.module('fanyongadminApp').factory('sessionInjector', ['sessionService', function(sessionService) {
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
angular.module('fanyongadminApp').config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('sessionInjector');
}]);