'use strict';

angular.module('fantasyadminApp')
  .controller('CheckCreditCtrl', function ($scope,$rootScope,$state) {
    $rootScope.menuPath = '审核管理 > 信用审核';
     //查看信用详情
      $scope.detail=function(){
        // window.location.href="#/check/credit/detail";
        $state.go("main.checkCreditDetail");
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
  .controller('CheckCreditDetailCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '审核管理 > 信用审核 > 信用审核详细';

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

      //点击查看大图
      $(".pic-box img").click(function () {
        //$(".view-big-img").show(500);
        var picPath = $(this).attr("src");
        $("#showImg").attr("src",picPath);
        $("#showImgModal").modal('show');
      });

  });
