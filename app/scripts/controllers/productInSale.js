'use strict';

angular.module('fantasyadminApp')
  .controller('ProductInSaleCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '商品管理 > 在售商品';

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

  });
