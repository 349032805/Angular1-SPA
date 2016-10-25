  'use strict';

  	//开发环境请求地址
  	var baseUrl = "";

  	//生产环境请求地址
  	// var baseUrl = "http://192.168.xxx.xxx";

   angular.module('fanyongadminApp').factory('urlService', ['$q', '$injector',function() { 
    var urlService = {
        getBaseUrl:getBaseUrl
    };
    return urlService; 

   	function getBaseUrl() {
   		return baseUrl;
    }

  }  
]);

