'use strict';

angular.module('fantasyadminApp')
  .controller('MarketingProductCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '营销推广 > 商品推广';

     //切换推广位
      $("#location_select").change(function () {
        var value = $(this).val();
        if(value === 0 || value === 1 || value === 2){
          $("#product_form").hide();
          $("#ad_form").slideDown(300);
        }else{
          $("#ad_form").hide();
          $("#product_form").slideDown(300);
        }
      });

  });
