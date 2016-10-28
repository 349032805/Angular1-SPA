something can improve,if you can

1. 导航菜单
使用抽象模板配置:抽象模板不能被激活，但是它的子模板可以被激活。抽象模板可以提供一个包括了多个有名的视图的模板，或者它可以传递作用域变量$scope给子模板。使用它可以在同一个url下传递自定义数据或者预载入的依赖。除了需要添加abstract属性外，其他设置和设定一个常规状态是相同的：
 like this;
 $stateProvider  
 .state('admin', {
    abstract: true,
    url: '/admin',
    template: '<div ui-view></div>'
  })
  .state('admin.index', {
    url: '/index',
    template: '<h3>Admin index</h3>'
  })
  .state('admin.users', {
    url: '/users',
    template: '<ul>...</ul>'
  });

  <a href="#/home" ui-sref="home">Home</a> | <a href="#/about" ui-sref="about">About</a>

<ul>
    <li ng-repeat="contact in contacts">
        <a href="#/contacts/1" ui-sref="contacts.detail({ id: contact.id })">Joe</a>
    </li>
    <li ng-repeat="contact in contacts">
        <a href="#/contacts/2" ui-sref="contacts.detail({ id: contact.id })">Alice</a>
    </li>
    <li ng-repeat="contact in contacts">
        <a href="#/contacts/3" ui-sref="contacts.detail({ id: contact.id })">Bob</a>
    </li>
</ul>

2.日期控件以及其他常规控件使用angular自带的组件编码




