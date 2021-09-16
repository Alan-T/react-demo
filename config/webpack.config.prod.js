/*
    生产环境配置
*/
const { merge } = require('webpack-merge');
const { BaseConfig } = require('./webpack.config.base')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin'); // 压缩 css

module.exports = merge(BaseConfig(), {
    mode: 'production',
    // 优化
    optimization: {
        minimizer: [
            new CssMinimizerWebpackPlugin(),
        ],
        minimize: true,
    },
})