const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/dist', // Folder to store generated bundle
        filename: 'app.[hash].js',  // Name of generated bundle after build
        publicPath: '/' // public URL of the output directory when referenced in a browser
    },
    module: {  // where we defined file patterns and their loaders
        rules: [ 
            {
                test: /\.js$/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ]
                }
                },
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                use:  [ 
                    'style-loader', 
                    MiniCssExtractPlugin.loader, 
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [  // Array of plugins to apply to build chunk
        new HtmlWebpackPlugin({
            title: 'Expensometer',
            template: "./src/public/index.html",
            inject: 'body',
            baseUrl: '/'
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer',
        }),
        new MiniCssExtractPlugin({
            filename: 'app.[hash].css',
        })
    ],
    devServer: {  // configuration for webpack-dev-server
        contentBase: './src/public',  //source of static assets
        port: 3030, // port to run dev-server
    } 
}