const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
            // modules: [path.resolve(__dirname, 'src')],
            extensions: ['.js', '.jsx'],
            // alias :{ moment$: 'moment/moment.js' }
        },
        entry: {
            index: path.resolve(__dirname, "src/index.jsx"),
        },
        devtool: 'inline-source-map',
        output: {
            // 打包文件根目录
            filename: '[name].[hash:8].js',
            path: path.resolve(__dirname, "dist/"),
            clean: true,
        },
        module: {
            rules: [{
                    test: /\.(jsx|js)?$/,
                    use: ["babel-loader"],
                    include: path.resolve(__dirname, 'src'),
                },
                {
                    test: cssRegex,
                    exclude: cssModuleRegex,
                    use: ["style-loader", "css-loader", "postcss-loader"]
                },
                {
                    test: cssModuleRegex,
                    use: [
                        "style-loader",
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
                    use: ["style-loader", "css-loader", "postcss-loader", "stylus-loader"]
                },
                {
                    test: stylModuleRegex,
                    use: [
                        "style-loader",
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
                    use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
                    sideEffects: true,
                },
                {
                    test: lessModuleRegex,
                    use: [
                        "style-loader",
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
        plugins: [
            // 生成 index.html
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: path.resolve(__dirname, "public/index.html"),
            }),
        ],
        devServer: {
            port: 8080,
            host: '0.0.0.0',
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