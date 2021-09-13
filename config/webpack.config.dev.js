const {merge} = require('webpack-merge');
const {BaseConfig} = require('./webpack.config.base')

module.exports = merge(BaseConfig(), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        // contentBase: path.resolve(__dirname, '../dist'),
        host: '127.0.0.1',
        port: 9000,
        hot: true,
        open: true,
    },
})