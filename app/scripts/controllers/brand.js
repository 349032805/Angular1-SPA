'use strict';

angular.module('fantasyadminApp')
  .controller('BrandCtrl', function ($scope,$rootScope,$state) {
    $rootScope.menuPath = '系统设置 > 品牌库管理';

  	//查看品牌详情
      $scope.detail=function(){
        // window.location.href="#/system/brand/detail";
        $state.go("main.brandDetail");
      };

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

  .controller('AddBrandCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '系统设置 > 品牌库管理 > 新增品牌';


  })

  .controller('BrandDetailCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '系统设置 > 品牌库管理 > 品牌详情';


  });
