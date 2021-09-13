const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 打包分离 css
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin'); // 压缩 css
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");

module.exports = (env) => {

    // css/css module 正则表达式
    const cssRegex = /\.css$/;
    const cssModuleRegex = /\.module\.css$/;
    // less/less module 正则表达式
    const lessRegex = /\.less$/;
    const lessModuleRegex = /\.module\.less$/;
    // stylus/stylus module 正则表达式
    const stylRegex = /\.styl$/;
    const stylModuleRegex = /\.module\.styl$/;

    return {
        mode: "development",
        
        resolve: {
            // modules: [path.resolve(__dirname, '../src')],
            extensions: ['.js', '.jsx'],
            // 别名
            alias: {
                '@': path.resolve(__dirname, '../src')
            }
            // alias :{ moment$: 'moment/moment.js' }
        },
        entry: {
            index: path.resolve(__dirname, "../src/index.jsx"),
        },
        devtool: 'inline-source-map',
        output: {
            // 构建文件名称
            filename: 'js/[name].[hash:8].js',
            // 构建项目路径
            path: path.resolve(__dirname, "../dist/"),
            // 清除历史打包文件
            clean: true,
            // 构建图片文件格式
            assetModuleFilename: "images/[name].[hash:8].[ext]",
        },
        module: {
            rules: [{
                    test: /\.(jsx|js)?$/,
                    use: ["babel-loader"],
                    include: path.resolve(__dirname, '../src'),
                },
                {
                    test: cssRegex,
                    exclude: cssModuleRegex,
                    use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
                },
                {
                    test: cssModuleRegex,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                modules: {
                                    getLocalIdent: getCSSModuleLocalIdent,
                                }
                            }
                        },
                        "postcss-loader"
                    ]
                },
                {
                    test: stylRegex,
                    exclude: stylModuleRegex,
                    use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "stylus-loader"]
                },
                {
                    test: stylModuleRegex,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                modules: {
                                    getLocalIdent: getCSSModuleLocalIdent,
                                }
                            }
                        },
                        "postcss-loader",
                        "stylus-loader"
                    ]
                },
                {
                    test: lessRegex,
                    exclude: lessModuleRegex,
                    use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "less-loader"],
                    sideEffects: true,
                },
                {
                    test: lessModuleRegex,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                modules: {
                                    getLocalIdent: getCSSModuleLocalIdent,
                                }
                            }
                        },
                        "postcss-loader",
                        "less-loader"
                    ],
                },
                {
                    test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf|otf)$/i,
                    type: "asset/resource",
                },
            ]
        },
        // 优化
        optimization: {
            minimizer: [
                new CssMinimizerWebpackPlugin(),
            ],
            minimize: true,
        },
        // 插件
        plugins: [
            // 生成 index.html
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: path.resolve(__dirname, "../public/index.html"),
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[hash:8].css'
            })
        ],
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
        },
        cache: {
            type: 'filesystem',
            // 可选配置
            buildDependencies: {
                config: [__filename], // 当构建依赖的config文件（通过 require 依赖）内容发生变化时，缓存失效
            },
            name: 'development-cache',
        },
    }
}