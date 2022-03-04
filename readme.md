<!--
 * @Description: 
 * @Author: YiYi@sp-0271
 * @Date: 2021-12-31 10:07:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-31 15:12:47
-->
cli 脚手架工具  命令行工具
开发法 静态资源 
webpack default  js文件
html-webpack-plugin 整合成js引用依赖
默认webpack 只做了代码压缩
HtmlwebpackPlugin 解析html;关联public html跟src js文件
先执行new htmlplugin 找index下的key对应的bundlejs 动态插入到template

dev
staic 静态资源文件夹 http访问到 公开一个服务器的静态资源文件夹
hmr: hot module replace
prod 压缩

babel: es语法解析器 识别语法并转译 兼容性
体系 ~7.X  

babel-loader  服务webpack加载机 webpack触发babel的契机
@babel/core @babel/preset-env -D
core-js -S

style-loader css-loader postcss-loader sass-loader
// 将得到的js样式对象动态插入到head标签整合到代码中
{loader: 'style-loader'},
// 将css样式文件处理成webpack能认识的js对象
{loader: 'css-loader'},
// css兼容性及代码压缩问题
{loader: 'postcss-loader'},
// 处理 sass语法
{loader: 'sass-loader'},

loaders: 转换代码的能力 字符串转换最后交给webpack以js的方式运行

plugins:拦截webpack生命周期的能力 文件处理其他操作

postcss-preset-env postcss cssnano



