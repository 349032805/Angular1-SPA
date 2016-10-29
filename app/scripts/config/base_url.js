  'use strict';

  	//开发环境请求地址
  	var baseUrl = "";

  	//生产环境请求地址
  	// var baseUrl = "http://";

   angular.module('fantasyadminApp').factory('urlService', ['$q', '$injector',function() { 
    var urlService = {
        getBaseUrl:getBaseUrl
    };
    return urlService; 

   	function getBaseUrl() {
   		return baseUrl;
    }

  }  
]);

