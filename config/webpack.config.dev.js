const { merge } = require('webpack-merge');
const { BaseConfig } = require('./webpack.config.base')
const webpack = require('webpack');

module.exports = merge(BaseConfig(), {
    mode: 'development',
    devtool: 'inline-source-map',
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
        host: '127.0.0.1',
        port: 9000,
        hot: true,
        open: true,
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