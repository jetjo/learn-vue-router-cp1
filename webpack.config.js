const { VueLoaderPlugin } = require("vue-loader");
const HtmlPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.s(c|a)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlPlugin({
            template: './src/index.ejs'
        }),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: JSON.stringify(true),
            __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
            BASE_URL: JSON.stringify('./')
        }),
    ],
    devServer: {
        port: 9080
    }
}
