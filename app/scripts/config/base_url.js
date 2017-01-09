  'use strict';

   angular.module('fantasyadminApp').service('urlService',function() { 
    
    //开发环境请求地址
    this.baseUrl = "";
    // this.baseUrl = "http://192.168.132.102:8080";

    //生产环境请求地址
    //this.baseUrl = "http://";

  }  
);