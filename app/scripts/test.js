'use strict';

angular.module('fantasyadminApp')
  .controller('TestCtrl', function ($scope,$http,urlService) {
	$scope.goPage = function ($event) {
        $scope.page = $event.target.getAttribute('data');
        alert($scope.page);
    }

     $http({
          method:'GET',
          url:urlService.getBaseUrl()+'/api/v1/merchants/6'
          // params:'';
      }).then(function(resp){
      	console.log(resp.statusText);
        }, function(resp){
        	console.log("fail...");
      });
   
  });
