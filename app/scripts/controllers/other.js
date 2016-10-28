'use strict';

angular.module('fantasyadminApp')
  .controller('OtherCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '系统设置 > 其他设置';

		//切换tab
      $(".nav-tabs li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var id = $(this).attr("id");
        $("#"+id+"_content").show().siblings(".tab-content").hide();

      });

      //添加广告
      $scope.addPay=function(){
        var tbLength = $("#pay_table tr").length;
        if(tbLength <20) {
          var tr = $("#add_period_pay_template tr").clone(true);
          $("#pay_table").append(tr);

         /* //重置下标
          resetTrNum('ad_table');
          //重置序号
          resetSequence('ad_table');*/
        }else{
          alert("添加限20个以内!");
        }
      };

      //添加原因
      $scope.addReason=function(){
        var tbLength = $("#reason_table tr").length;
        if(tbLength <20) {
          var tr = $("#add_reason_template tr").clone(true);
          $("#reason_table").append(tr);

          /* //重置下标
           resetTrNum('ad_table');
           //重置序号
           resetSequence('ad_table');*/
        }
      };

  });
