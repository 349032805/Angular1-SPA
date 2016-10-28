  'use strict';

  angular.module('fantasyadminApp').factory('httpInterceptor', [ '$q', '$injector',function($q, $injector) { 
    var httpInterceptor = { 
      'responseError' : function(response) { 
        if (response.status === 401) { 
          var rootScope = $injector.get('$rootScope'); 
          var state = $injector.get('$rootScope').$state.current.name; 
          rootScope.stateBeforLogin = state; 
          rootScope.$state.go("login"); 

        } else if (response.status === 403) {
          angular.element('#server_error_msg').text('您没有权限访问该网页...');
          angular.element('#modal_server_error').modal('show');

        } else if (response.status === 404) {
          angular.element('#server_error_msg').text('您访问的网页不存在...');
          angular.element('#modal_server_error').modal('show');

        } else if (response.status === 400) {
          angular.element('#server_error_msg').text('服务器出错，请稍后重试...');
          angular.element('#modal_server_error').modal('show');

        } else if (response.status === 500) {
          angular.element('#server_error_msg').text('服务器出错，请稍后重试...');
          angular.element('#modal_server_error').modal('show');

        } else if (response.status === 409) {
          angular.element('#server_error_msg').text(response.statusText);
          angular.element('#modal_server_error').modal('show');
        }
         return $q.reject(response); 
      }, 
      'response' : function(response) { 
        return response; 
      } 
    };
    return httpInterceptor; 
  }  
]);

  angular.module('fantasyadminApp').config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
}]);

