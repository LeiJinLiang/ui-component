'use strict'

var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry : [
        path.join(__dirname, 'src/app.js')
    ],
    output : {
        path : path.join(__dirname,'/dist/'),
        filename : '[name]-[hash]-min.js',
        publicPath : '/',
        chunkFilename : '[name].[chunkhash:5].chunk.js'
    },
    plugins : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template : 'src/index.tpl.html',
            inject : 'body',
            filename : 'index.html',
            favicon: './src/icon.png'
        }),
        new ExtractTextPlugin('[name]-[hash].min.css'),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname,
                postcss: [
                    require('autoprefixer')
                ]
            }
        })
    ],
    module : {
        loaders : [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    "presets": ["es2015", "stage-0", "react"]
                }
            },
            {
                test: /\.json?$/,
                loader: 'json'
            },
            {
                test: /\.css$/,
                //loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss')
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use : 'css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss-loader'
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader'
            }
        ]
    }
}