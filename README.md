# fanyongadmin

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

前端基础配置
1.创建自己的代码文件夹,从git上迁出项目
2.安装homebrew.打开网址：http://brew.sh,）在网页中找到：ruby -e “$(curl-fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)” 在终端复制执行,安装完成后，在终端里 执行 brew list， brew doctor, 如果这两条命令能够执行成功，就证明home-brew已经安装成功.
3.在终端执行命令,安装node环境,bower,grunt,如果有错误的提示,在命令前加sudo权限允许.
brew install nodejs  
npm install -g bower
npm install -g grunt-cli

4.重新打开另一个终端窗口,安装ruby,sass,compass,如有版本提示,选比较新的版本
\curl -sSL https://get.rvm.io | bash
rvm install ruby-2.1-head
gem install sass
gem install compass

5.进入项目目录,安装bower和node配置的组件,执行bower install,npm install,如有版本提示,选择与配置文件相同或者相近的版本.
执行grunt build,编译完后,grunt serve启动项目
登录页面自动弹出.

代码编辑器和查看推荐用siblime# Angular1-SPA
