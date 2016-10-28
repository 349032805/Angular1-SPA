'use strict';

angular.module('fantasyadminApp')
  .controller('LoginCtrl', function ($scope,$http,$state) {
    $scope.login=function(admin){


      // 发请求

      //封装jquery ajax请求
      //  service({url: '/login',
      //    data: $scope.admin,
      //    success: function(data){
      //      if(data.success){
      //          location.href="#/main/index";
      //      }else{
      //          $.each(data.errors,function(index,error){
      //               $("#errorInfo").text(error.defaultMessage);
      //          });
      //      }
      //    } 
      // });

      //$http post方法
      // var params = $scope.admin;
      // $http.post('/login', params).then(function(resp){
     //    location.href="#/main/index";
      //    $state.go("main.index");
      //   }, function(resp){
      // })

      // $http({
      //     method:'POST',
      //     url:'/login',
      //     params:$scope.admin
      // }).then(function(resp){
      //    //判断登录状态是否成功,成功后设置sesssionStorage,失败给出提示
      //    //...
      //    // window.sessionStorage.user = resp.data.user;

      //    $state.go("main.index");
      //   }, function(resp){
      // });

      // 发请求
      $state.go("main.index");
    };

  });
