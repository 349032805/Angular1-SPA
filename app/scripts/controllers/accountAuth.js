'use strict';

angular.module('fantasyadminApp')
  .controller('AccountAuthCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '账户管理 > 权限管理';

    // initDate();
    // function initDate() {
    //   $('#datetimepicker1').datetimepicker({
    //     format: 'YYYY-MM-DD HH:mm',
    //     pickTime: true,
    //     todayBtn: true,
    //     language: 'zh-cn'
    //   });

    //   $('#datetimepicker2').datetimepicker({
    //     format: 'YYYY-MM-DD HH:mm',
    //     pickTime: true,
    //     todayBtn: true,
    //     language: 'zh-cn'
    //   });
    // }


        //documentReady方法一
    // $scope.$on('$viewContentLoaded', function() {
    //     initDate();
    //   });

      //documentReady方法二
    // $scope.$watch('$viewContentLoaded', function() {
    //     initDate();
    //   });

      //documentReady方法三
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
  .controller('RoleAuthCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '账户管理 > 权限管理 > 角色权限';


  })
  .controller('AddUserAuthCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '账户管理 > 权限管理 > 新增用户权限';


  })
  .controller('AddRoleAuthCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '账户管理 > 权限管理 > 新增角色权限';


  });
