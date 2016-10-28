'use strict';

angular.module('fantasyadminApp')
  .controller('MarketingPlatformCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '营销推广 > 平台广告';

      //添加广告
      $scope.addAd=function(){
        var tbLength = $("#ad_table tr").length;
        if(tbLength <10) {
          var tr = $("#add_ad_template tr").clone(true);
          $("#ad_table").append(tr);

          //重置下标
          // resetTrNum('ad_table');
          //重置序号
          // resetSequence('ad_table');
        }else{
          alert("广告限10个以内!");
        }
      };

      //table行上移
      $(".arrow-up").click(function () {
        var currentTr = $(this).parent().parent();
        var prevTr = currentTr.prev();
        if (currentTr.index() > 0) {
          currentTr.insertBefore(prevTr);

          //重置下标
          // resetTrNum('ad_table');
          //重置序号
          // resetSequence('ad_table');
        }
      });

      //table行下移
      $(".arrow-down").click(function () {
        var currentTr = $(this).parent().parent();
        var nextTr = currentTr.next();
        if (nextTr) {
          currentTr.insertAfter(nextTr);
          //重置下标
          // resetTrNum('ad_table');
          //重置序号
          // resetSequence('ad_table');
        }
      });

  });
