  'use strict';

   angular.module('fantasyadminApp').service('sessionService',function() { 

      this.login = function (user,accessToken){
          window.sessionStorage.setItem("user", user);
          window.sessionStorage.setItem("accessToken", accessToken);
      }

      this.logout = function() {
        window.sessionStorage.clear();
    }

    this.isAnonymus = function(){
      var accessToken = window.sessionStorage.getItem("accessToken");
      if(accessToken != null && accessToken !=""){
        return true;
      }else{
        return false;
      }
    }

    this.getAccessToken = function(){
       var accessToken = window.sessionStorage.getItem("accessToken");
       return accessToken;
    }

  }  
);