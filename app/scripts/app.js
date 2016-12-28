'use strict';

/**
 * @ngdoc overview
 * @name fantasyadminApp
 * @description
 * # fantasyadminApp
 *
 * Main module of the application.
 */
angular
  .module('fantasyadminApp', [
    'ngResource',
    'ui.router',
    'ngMessages'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/login");
     $stateProvider
       .state("login", {
              url: "/login",
              templateUrl: "/views/login.html",
              controller: 'LoginCtrl'
          })
        .state("register", {
              url: "/register",
              templateUrl: "/views/register.html",
              controller: 'RegisterCtrl'
          })
        .state("main", {
            url: "/",
            templateUrl: "/views/main.html",
            controller: 'MainCtrl'
        })
        .state("main.index", {
            url:"main/index",
            templateUrl: "/views/index.html",
            controller: 'IndexCtrl'
        })
         .state("main.orderManage", {
            url:"deal/orderManage",
            templateUrl: "/views/deal/orderManage.html",
            controller: 'OrderManageCtrl'
        })

        .state("main.orderStatus", {
            url:"deal/orderStatus",
            templateUrl: "/views/deal/orderStatus.html"
        })

         .state("main.orderDetail", {
            url:"deal/orderDetail",
            templateUrl: "/views/deal/orderDetail.html",
            controller: 'OrderDetailCtrl'
        })
        .state("main.orderHandle", {
            url:"deal/orderHandle",
            templateUrl: "/views/deal/orderHandle.html",
            controller: 'OrderHandleCtrl'
        })

        .state("main.orderDelivery", {
            url:"deal/orderDelivery",
            templateUrl: "/views/deal/orderDelivery.html",
            controller: 'OrderDeliveryCtrl'
        })

        .state("main.productInSale", {
            url:"product/inSale",
            templateUrl: "/views/product/inSale.html",
            controller: 'ProductInSaleCtrl'
        })

        .state("main.productRelease", {
            url:"product/release",
            templateUrl: "/views/product/release.html",
            controller: 'ProductReleaseCtrl'
        })

        .state("main.supplierList", {
            url:"supplier/list",
            templateUrl: "/views/supplier/list.html",
            controller: 'SupplierListCtrl'
        })

        .state("main.addSupplier", {
            url:"supplier/add",
            templateUrl: "/views/supplier/addSupplier.html",
            controller: 'SupplierAddCtrl'
        })

        .state("main.supplierDetail", {
            url:"supplier/detail",
            templateUrl: "/views/supplier/supplierDetail.html",
            controller: 'SupplierDetailCtrl'
        })

        .state("main.shopList", {
            url:"shop/list",
            templateUrl: "/views/supplier/shopList.html",
            controller: 'ShopListCtrl'
        })

        .state("main.addShop", {
            url:"shop/add",
            templateUrl: "/views/supplier/addShop.html",
            controller: 'ShopAddCtrl'
        })

        .state("main.shopDetail", {
            url:"shop/detail",
            templateUrl: "/views/supplier/shopDetail.html",
            controller: 'ShopDetailCtrl'
        })

        .state("main.checkCredit", {
            url:"check/credit/list",
            templateUrl: "/views/check/creditList.html",
            controller: 'CheckCreditCtrl'
        })

        .state("main.checkOrder", {
            url:"check/order/list",
            templateUrl: "/views/check/orderList.html",
            controller: 'CheckOrderCtrl'
        })

        .state("main.checkCreditDetail", {
            url:"check/credit/detail",
            templateUrl: "/views/check/creditDetail.html",
            controller: 'CheckCreditDetailCtrl'
        })

        .state("main.checkOrderDetail", {
            url:"check/order/detail",
            templateUrl: "/views/check/orderDetail.html",
            controller: 'CheckOrderDetailCtrl'
        })

        .state("main.marketingPlatform", {
            url:"marketing/platform",
            templateUrl: "/views/marketing/platform.html",
            controller: 'MarketingPlatformCtrl'
        })

        .state("main.marketingProduct", {
            url:"marketing/product",
            templateUrl: "/views/marketing/product.html",
            controller: 'MarketingProductCtrl'
        })

        .state("main.messageSend", {
            url:"message/send",
            templateUrl: "/views/message/send.html",
            controller: 'MessageSendCtrl'
        })

        .state("main.messageList", {
            url:"message/list",
            templateUrl: "/views/message/list.html",
            controller: 'MessageListCtrl'
        })

        .state("main.accountUser", {
            url:"account/user",
            templateUrl: "/views/account/user.html",
            controller: 'AccountUserCtrl'
        })

        .state("main.accountAuth", {
            url:"account/auth/user",
            templateUrl: "/views/account/userAuth.html",
            controller: 'AccountAuthCtrl'
        })

        .state("main.userInfo", {
            url:"account/user/info",
            templateUrl: "/views/account/userInfo.html",
            controller: 'UserInfoCtrl'
        })

        .state("main.roleAtuh", {
            url:"account/auth/role",
            templateUrl: "/views/account/roleAuth.html",
            controller: 'RoleAuthCtrl'
        })

        .state("main.addUserAuth", {
            url:"account/auth/addUserAuth",
            templateUrl: "/views/account/addUserAuth.html",
            controller: 'AddUserAuthCtrl'
        })

        .state("main.addRoleAuth", {
            url:"account/auth/addRoleAuth",
            templateUrl: "/views/account/addRoleAuth.html",
            controller: 'AddRoleAuthCtrl'
        })

        .state("main.productCategory", {
            url:"system/productCategory",
            templateUrl: "/views/system/productCategory.html",
            controller: 'ProductCategoryCtrl'
        })

        .state("main.brand", {
            url:"system/brand",
            templateUrl: "/views/system/brand.html",
            controller: 'BrandCtrl'
        })

        .state("main.brandDetail", {
            url:"system/brand/detail",
            templateUrl: "/views/system/brandDetail.html",
            controller: 'BrandDetailCtrl'
        })

        .state("main.productProperty", {
            url:"system/productProperty",
            templateUrl: "/views/system/productProperty.html",
            controller: 'ProductPropertyCtrl'
        })

        .state("main.message", {
            url:"system/message",
            templateUrl: "/views/system/message.html",
            controller: 'MessageCtrl'
        })

         .state("main.messageTemplate", {
            url:"system/message/template",
            templateUrl: "/views/system/messageTemplate.html",
            controller: 'MessageTemplateCtrl'
        })

        .state("main.contract", {
            url:"system/contract",
            templateUrl: "/views/system/contractTemplate.html",
            controller: 'ContractCtrl'
        })

       .state("main.stageConsumeTable", {
            url:"contract/stageConsume/table",
            templateUrl: "/views/contract/stageConsumeTable.html",
            controller: 'ContractCtrl'
        })

        .state("main.stageConsumeClause", {
            url:"contract/stageConsume/clause",
            templateUrl: "/views/contract/stageConsumeClause.html",
            controller: 'ContractCtrl'
        })

        .state("main.stageConsumeGrant", {
            url:"contract/stageConsume/grant",
            templateUrl: "/views/contract/stageConsumeGrant.html",
            controller: 'ContractCtrl'
        })

        .state("main.other", {
            url:"system/other",
            templateUrl: "/views/system/otherSet.html",
            controller: 'OtherCtrl'
        })

        .state("main.dictionary", {
            url:"system/dictionary",
            templateUrl: "/views/system/dictionary.html",
            controller: 'DictionaryCtrl'
        })

        .state("main.addBrand", {
            url:"system/brand/add",
            templateUrl: "/views/system/addBrand.html",
            controller: 'AddBrandCtrl'
        })

        .state("main.addMessage", {
            url:"system/message/add",
            templateUrl: "/views/system/addMessage.html",
            controller: 'AddMessageCtrl'
        })

        .state("main.addProductProperty", {
            url:"system/productProperty/add",
            templateUrl: "/views/system/addProductProperty.html",
            controller: 'AddProductPropertyCtrl'
        })

        .state("main.modifyPassword", {
            url:"person/modifyPassword",
            templateUrl: "/views/person/modifyPassword.html",
            controller: 'ModifyPasswordCtrl'
        })

        .state("main.certification", {
            url:"person/certification",
            templateUrl: "/views/person/certification.html",
            controller: 'CertificationCtrl'
        })

        .state("main.changePhone", {
            url:"person/changePhone",
            templateUrl: "/views/person/changePhone.html",
            controller: 'ChangePhoneCtrl'
        })

        .state("main.findPassword", {
            url:"person/findPassword",
            templateUrl: "/views/person/findPassword.html",
            controller: 'fFindPasswordCtrl'
        })

        .state("main.test", {
              url: "test",
              templateUrl: "/views/test.html",
              controller: 'TestCtrl'
        });
        $urlRouterProvider.otherwise("/login");
  });
