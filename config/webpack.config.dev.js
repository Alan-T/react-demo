/*
    开发环境配置
*/

const { merge } = require('webpack-merge');
const { BaseConfig } = require('./webpack.config.base')
const webpack = require('webpack');

module.exports = merge(BaseConfig(), {
    mode: 'development',
    devtool: 'inline-source-map',
    watch:true,
    /**
    * devServer: 开发服务器 https: //webpack.docschina.org/configuration/dev-server/
    * 1. contentBase: 访问打包好的文件夹
    * 2. host
    * 3. port: 端口
    * 4. hot: 是否热加载（ webpack5 内置了热加载） https: //webpack.docschina.org/plugins/hot-module-replacement-plugin/#root
    * 5. open: 是否打开浏览器 
    */
    devServer: {
        // contentBase: path.resolve(__dirname, '../dist'),
        host: '127.0.0.1', //本地访问
        port: 9000, // 默认端口
        hot: true,    // 模块热更新
        open: true,   // 启动自动打开页面
        historyApiFallback: true,
        // proxy: {       // 开发代理，发布后需要nginx代理
        //     '/api/': {
        //         target: 'https://api.xxxx.cn',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api/': '',
        //         },
        //         secure: false,   // 设置支持https协议的代理
        //     },
        // }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
})