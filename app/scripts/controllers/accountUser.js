'use strict';

angular.module('fantasyadminApp')
  .controller('AccountUserCtrl', function ($scope,$rootScope,$state) {
     $rootScope.menuPath = '账户管理 > 用户管理';

     //查看用户资料
      $scope.detail=function(){
        // window.location.href="#/account/user/info";
        $state.go("main.userInfo");
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

  .controller('UserInfoCtrl', function ($scope,$rootScope) {
     $rootScope.menuPath = '账户管理 > 用户管理 > 用户资料';

     //切换信用资料和不良信用记录
      $(".tab-box").click(function () {
        $(this).addClass("active-tab").siblings().removeClass("active-tab");
        var id = $(this).attr("id");
        if(id==="credit_info"){
          $("#bad_credit_content").hide();
          $("#credit_info_content").slideDown();
        }else{
          $("#credit_info_content").hide();
          $("#bad_credit_content").slideDown();
        }
      });

      //切换tab
      // $(".nav-tabs li").click(function () {
      //   $(this).addClass("active").siblings().removeClass("active");

      //   var id = $(this).attr("id");
      //   $("#"+id+"_content").show(300).siblings(".tab-content").hide();
      // });

      $scope.changeTab=function($event){
         var currentTab = angular.element($event.target.parentNode);
         currentTab.addClass("active").siblings().removeClass("active");

         var id = $event.target.getAttribute('id');
         angular.element("#"+id+"_content").show(300).siblings(".tab-content").hide();
      };

  });


