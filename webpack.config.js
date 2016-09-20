'use strict';

const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: './home',
    output: {
        filename: 'build.js',
        library: 'home'
    },
    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    plugins: [
        new webpack.OldWatchingPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],
    devtool: NODE_ENV == 'development' ? 'source-map' : null,
    module: {
        loaders: [{
            test: /\.js$/,
            //Or use file .babelrc
            // loader: 'babel?presets[]=es2015'
            loader: 'babel'
        }]
    }
};