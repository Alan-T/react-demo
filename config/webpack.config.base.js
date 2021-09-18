/*
    通用环境配置
*/
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 打包分离 css
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");

const BaseConfig = () => {

    // css/css module 正则表达式
    const cssRegex = /\.css$/;
    const cssModuleRegex = /\.module\.css$/;
    // less/less module 正则表达式
    const lessRegex = /\.less$/;
    const lessModuleRegex = /\.module\.less$/;

    return {
        resolve: {
            // modules: [path.resolve(__dirname, '../src')],
            extensions: ['.js', '.jsx', 'less', 'css', 'json',],
            // 别名
            alias: {
                '@': path.resolve(__dirname, '../src')
            }
        },
        entry: {
            index: path.resolve(__dirname, "../src/index.jsx"),
        },

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

        cache: {
            type: 'filesystem',
            allowCollectingMemory: true,
        },
    }
}

module.exports = {
    BaseConfig
}