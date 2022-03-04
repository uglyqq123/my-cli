/*
 * @Description: 
 * @Author: YiYi@sp-0271
 * @Date: 2021-12-31 10:08:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-03 20:34:21
 */

const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(base, {
    mode: 'production',
    output: {
        filename: '[name]-[chunkhash].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]

})