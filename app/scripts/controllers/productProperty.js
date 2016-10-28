'use strict';

angular.module('fantasyadminApp')
  .controller('ProductPropertyCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '系统设置 > 商品属性';


  })
  .controller('AddProductPropertyCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '系统设置 > 商品属性 > 新增商品属性';


  });
