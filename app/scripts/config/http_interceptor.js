  'use strict';

  angular.module('fantasyadminApp').factory('httpInterceptor', [ '$q', '$injector',function($q, $injector) { 
    var httpInterceptor = { 
      'responseError' : function(response) {
        var tipMsg = "";
        if (response.status === 401) { 
          var rootScope = $injector.get('$rootScope'); 
          var state = $injector.get('$rootScope').$state.current.name; 
          rootScope.stateBeforLogin = state; 
          rootScope.$state.go("login"); 

        } else if (response.status === 403) {
          tipMsg = "您没有权限访问该网页...";

        } else if (response.status === 404) {
          tipMsg = "您访问的网页不存在...";

        } else if (response.status === 400 || response.status === 500) {
          tipMsg = "服务器出错，请稍后重试...";

        } else if (response.status === 409) {
          tipMsg = response.statusText;
        }

        if(tipMsg !=""){
           angular.element('#server_error_msg').text(tipMsg);
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

