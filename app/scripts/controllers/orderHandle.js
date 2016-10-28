'use strict';

angular.module('fantasyadminApp')
  .controller('OrderHandleCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '交易管理 > 订单处理';

     $(".msg-arrow").click(function () {
        var $periodPay = $(this).parent().siblings(".period-pay");
        if($periodPay.is(":visible")){
          $periodPay.slideUp();
        }else{
          $periodPay.slideDown();
        }
      });

      $(".close-icon").click(function () {
        var $periodPay = $(this).parent().parent();
        $periodPay.slideUp();
      });

      //退款受理
      $scope.refundOpt=function(){
        angular.element('#refundDealDialog').modal('show');
      };

      //退款详情
      $scope.refundDetail=function(){
        angular.element('#refundDetailDialog').modal('show');
      };

      //售后服务
      $scope.afterSaleService=function(){
        angular.element('#afterSaleServiceDialog').modal('show');

      };

      //交易异常关闭
      $scope.closeDeal=function(){
        angular.element('#closeDealDialog').modal('show');
      };

      //异常交易详情
      $scope.exceptionDeal=function(){
        angular.element('#exceptionDealDialog').modal('show');
      };

      //订单签收
      $scope.orderSign=function(){
        angular.element('#orderSignDialog').modal('show');
      };

      //切换tab
      $(".nav-tabs li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
      });

  });
