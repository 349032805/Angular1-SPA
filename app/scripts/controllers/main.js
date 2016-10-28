'use strict';

angular.module('fantasyadminApp')
  .controller('MainCtrl', function ($scope,$state,sessionService) {

  	   //子菜单点击变白色
      $(".child-menu-box li").click(function(e) {
        e.stopPropagation();
        $(".child-menu-box li a").removeClass("active-child-menu");
        $(this).children().removeClass("other-child-menu").addClass("active-child-menu");
      });

      //主菜单展开收缩
      $(".menu-box li").click(function() {
        //显示左侧竖线
        $(".hover-menu").removeClass("active-menu");
        $(this).find(".hover-menu").addClass("active-menu");

        //关闭其它主菜单并调整箭头
        $(this).siblings().children(".child-menu-box").hide(300);
        $(this).siblings().find(".arrow").removeClass("arrow-down").addClass('arrow-right');

        //展开子菜单
        $(".child-menu-box li a").removeClass("active-child-menu");
        // var id = $(this).attr("id");
        //var $children = $("#"+id+"_children");
        var $children = $(this).children(".child-menu-box");
        $children.toggle(300);
        // if($children.is(":visible")){
        //  $children.hide(300);
        // }else{
        //  $children.show(300);
        // }

        //箭头转换
        var $arrow  = $(this).find(".arrow");
        if($arrow.hasClass("arrow-right")){
          $arrow.removeClass("arrow-right").addClass('arrow-down');
        }else{
          $arrow.removeClass("arrow-down").addClass('arrow-right');
        }
      });


      $scope.logout=function(){
        sessionService.logout();
        $state.go("login");
      };

  });
