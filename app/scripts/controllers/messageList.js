'use strict';

angular.module('fantasyadminApp')
  .controller('MessageListCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '消息管理 > 消息管理';

 		//查看消息详情
      $scope.detail=function(){
        $("#detailDialog").modal('show');
      };
  });
