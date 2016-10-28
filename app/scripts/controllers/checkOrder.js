'use strict';

angular.module('fantasyadminApp')
  .controller('CheckOrderCtrl', function ($scope,$rootScope,$state) {
     $rootScope.menuPath = '审核管理 > 订单审核';

 	//查看订单详情
      $scope.detail=function(){
        // window.location.href="#/check/order/detail";
        $state.go("main.checkOrderDetail");
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
  .controller('CheckOrderDetailCtrl', function ($scope,$rootScope) {
     $rootScope.menuPath = '审核管理 > 订单审核 > 订单审核详细';

	//展开具体内容
      $(".block-title").click(function () {
        var id = $(this).attr("id");
        //$("#"+id+"_content").toggle(300);
        var $content = $("#"+id+"_content");
        if($content.is(":visible")){
          $content.slideUp(300);
        }else{
          $content.slideDown(300);
        }

        //箭头转换
        var $arrow  = $(this).find(".arrow");
        if($arrow.hasClass("arrow-up")){
          $arrow.removeClass("arrow-up").addClass('arrow-down2');
        }else{
          $arrow.removeClass("arrow-down2").addClass('arrow-up');
        }

      });
  });
