'use strict';

angular.module('fantasyadminApp')
  .controller('ContractCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '系统设置 > 合同模板';

 		//查看合同详情
      $scope.detail=function(contract){
        if(contract ==="table"){
          location.href="#/contract/stageConsume/table";
        }

        if(contract ==="clause"){
          location.href="#/contract/stageConsume/clause";
        }

        if(contract ==="grant"){
          location.href="#/contract/stageConsume/grant";
        }
      };


  });
