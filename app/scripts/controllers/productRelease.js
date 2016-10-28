'use strict';

angular.module('fantasyadminApp')
  .controller('ProductReleaseCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '商品管理 > 发布商品';

 	//切换tab
      $(".nav-tabs li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");

        var id = $(this).attr("id");
        $("#"+id+"_content").show(300).siblings(".tab-content").hide();
      });

      //选择商品类目
      $(".select-box li").click(function () {

      });

  });
