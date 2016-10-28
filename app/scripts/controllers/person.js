'use strict';

angular.module('fantasyadminApp')
  .controller('ModifyPasswordCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '个人中心 > 修改密码';


  })

  .controller('CertificationCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '个人中心 > 实名认证';


  })

  .controller('ChangePhoneCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '个人中心 > 修改手机';


  })

  .controller('fFindPasswordCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '个人中心 > 找回密码';


  });
