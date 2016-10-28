'use strict';

angular.module('fantasyadminApp')
  .controller('MessageCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '系统设置 > 消息设置';

 		//查看消息详情
      $scope.detail=function(){
        $("#messageDetailDialog").modal('show');
      };

      //消息设置
      $(".set").click(function (e) {
        e.stopPropagation();
        location.href="/#/system/message/add";
      });

      angular.element(document).ready(function() {
        initDate();
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
    }

  })

  .controller('AddMessageCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '系统设置 > 消息设置 > 新增消息';


  })

  .controller('MessageTemplateCtrl', function ($scope,$rootScope) {
    $rootScope.menuPath = '系统设置 > 消息设置 > 消息模板';

     //查看消息模板详情
      $scope.detail=function(){
        $("#messageTemplateDetailDialog").modal('show');
      };

      //新增模板
      $scope.addTemplate=function(){
        $("#addMessageTemplateDialog").modal('show');
      };

      //统计模板输入字数
      $("#template_content").keyup(function() {
        countWord();
      });

      //选中参数追加内容
      var $templateContent = $("#template_content");
      $(".param-select li").click(function () {
        var code = $(this).attr("data-code");
        $templateContent.append(code);
        countWord();
      });

     function countWord(){
      var text=$("#template_content").val();
      var counter=text.length;
      $("#word_num").text(counter);
    }

  });
