/*
 * @Description: 配置文件用webpack-cli 工具加载，本质上node命令执行的， commonJS模块加载方式
 * @Author: YiYi@sp-0271
 * @Date: 2021-12-31 10:08:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-03 19:56:42
 */
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js' // name自动识别entry中的key来生成文件名
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    // 将得到的js样式对象动态插入到head标签整合到代码中
                    { loader: 'style-loader' },
                    // 将css样式文件处理成webpack能认识的js对象
                    { loader: 'css-loader' },
                    // css兼容性及代码压缩问题
                    { loader: 'postcss-loader' },
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' },
                    // 处理 sass语法
                    { loader: 'sass-loader' },
                ]
            },
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html',
            chunks: ['index'] // 将js部分合html网页进行关联
        })
    ]
}