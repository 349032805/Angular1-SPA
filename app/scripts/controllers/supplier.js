'use strict';

angular.module('fantasyadminApp')
  .controller('SupplierListCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '商户管理 > 商户管理';
    

     //查看商户详情
      $scope.detail=function(){
        window.location.href="#/supplier/detail";
      };

      //删除商户
      //$scope.del=function(){
      //};
      $(".del").click(function (e) {
        e.stopPropagation();
        $("#delDialog").modal('show');
      });

    angular.element(document).ready(function() {
        initDate();
     });

    function initDate() {
      angular.element('#datetimepicker1').datetimepicker({
        format: 'YYYY-MM-DD HH:mm',
        pickTime: true,
        todayBtn: true,
        language: 'zh-cn'
      });

      angular.element('#datetimepicker2').datetimepicker({
        format: 'YYYY-MM-DD HH:mm',
        pickTime: true,
        todayBtn: true,
        language: 'zh-cn'
      });
    }

  })

  .controller('SupplierAddCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '商户管理 > 商户管理 > 新增商户';
    
  })

   .controller('SupplierDetailCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '商户管理 > 商户管理 > 商户详细';
    
  })

   .controller('ShopListCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '商户管理 > 店铺管理';

     //查看店铺详情
      $scope.detail=function(){
        window.location.href="#/shop/detail";
      };

  })

  .controller('ShopAddCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '商户管理 > 店铺管理 > 新增店铺';
    
  })

  .controller('ShopDetailCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '商户管理 > 店铺管理 > 店铺详细';
    
  });
