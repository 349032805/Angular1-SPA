'use strict';

angular.module('fantasyadminApp')
  .controller('OrderManageCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '交易管理 > 订单管理';

     $scope.search=function(){
     	alert("查询");
      };

    $(".msg-arrow").click(function () {
      var $periodPay = $(this).parent().siblings(".period-pay");
      if($periodPay.is(":visible")){
        $periodPay.slideUp();
      }else{
        $periodPay.slideDown();
      }
    });

    $(".close-icon").click(function () {
      var $periodPay = $(this).parent().parent();
      $periodPay.slideUp();
    });

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

      angular.element('#datetimepicker3').datetimepicker({
        format: 'YYYY-MM-DD HH:mm',
        pickTime: true,
        todayBtn: true,
        language: 'zh-cn'
      });

      angular.element('#datetimepicker4').datetimepicker({
        format: 'YYYY-MM-DD HH:mm',
        pickTime: true,
        todayBtn: true,
        language: 'zh-cn'
      });
    }

      //$('#datetimepicker1').datetimepicker({
      //  //viewMode: 'years',
      //  startView: 'years',
      //  pickTime: false,
      //  todayBtn: true,
      //  language:'zh-cn',
      //  numberOfMonths:1,
      //  showButtonPanel:true,      //是否显示按钮面板
      //  format: 'yyyy-mm-dd',
      //  showMonths: false,
      //  //minViewMode: "years",
      //  minViewMode: "days",
      //  //dateFormat: 'yyyy',
      //  //defaultDate: "11/1/2013",
      //  //defaultDate: show(),      //默认显示日期
      //  minDate:'2010-01-01',      //最小日期
      //  //maxDate:show(),            //最大日期
      //  icons: {
      //    time: "fa fa-clock-o",
      //    date: "fa fa-calendar",
      //    up: "fa fa-arrow-up",
      //    down: "fa fa-arrow-down"
      //  }
      //});

  })

  .controller('OrderDetailCtrl', function ($scope,$rootScope,$location) {
    $rootScope.menuPath = '交易管理 > 订单管理 > 订单明细';
    var id  = $location.search().id;
    var orderId  = $location.search().orderId;
    alert(id);
    alert(orderId);

     //页面
      //$("#full_pay").show();
      $scope.process="full_pay";

      //点击分期付款明细
      $scope.showPayDetail=function(){
        //$(".pay-detail").toggle(300);
        var $payDetail = $(".pay-detail");
        if($payDetail.is(":visible")){
          $payDetail.slideUp();
        }else{
          $payDetail.slideDown();
        }
      };

      //点击查看大图
      $(".big-img").click(function () {
        //$(".view-big-img").show(500);
        var picPath = $(this).attr("src");
        $("#showImg").attr("src",picPath);
        $("#showImgModal").modal('show');
      });

  });