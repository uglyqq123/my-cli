/*
 * @Description: 
 * @Author: YiYi@sp-0271
 * @Date: 2021-12-31 10:08:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-31 11:04:24
 */

const { merge} = require('webpack-merge');
const base = require('./webpack.base');
const path = require('path');

module.exports = merge(base, {
    mode: 'development',
    devServer: {
        static: [
            path.resolve(__dirname, 'dist'),
            path.resolve(__dirname, 'public'),
        ],
        host: 'localhost',
        port: 8080,
        open: true,
        hot: true,
    }
})