'use strict';

angular.module('fantasyadminApp')
  .controller('OrderDeliveryCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '交易管理 > 订单发货';

     //发货
      $scope.delivery=function(diliveryType){
        if(diliveryType ===0){
          $("#orderDeliveryDialog1").modal('show');
        }else{
          $("#orderDeliveryDialog2").modal('show');
        }
      };

  });
