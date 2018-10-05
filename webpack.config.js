const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    mode: 'production',

    entry: [
        'babel-polyfill',
        path.join(__dirname, 'src', 'index.js')
    ],

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },

    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};