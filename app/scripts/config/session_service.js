  'use strict';

   angular.module('fantasyadminApp').factory('sessionService', ['$q', '$injector',function($q, $injector) { 
    var sessionService = {
        login:login,
        logout:logout,
        isAnonymus:isAnonymus,
        getAccessToken:getAccessToken
    };
    return sessionService; 

   function login(user,accessToken) {
          window.sessionStorage.setItem("user", user);
          window.sessionStorage.setItem("accessToken", accessToken);
      }

    function logout() {
      window.sessionStorage.clear();
    }

    function isAnonymus() {
      var accessToken = window.sessionStorage.getItem("accessToken");
      if(accessToken != null && accessToken !=""){
        return true;
      }else{
        return false;
      }
    }

    function getAccessToken() {
       var accessToken = window.sessionStorage.getItem("accessToken");
       return accessToken;
    }

  }  
]);

