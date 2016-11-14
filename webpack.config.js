'use strict';

const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    context: __dirname + '/frontend',
    entry: {
        home: './home',
        about: './about'
        //welcome cannot be connected because home and about have dependencies on it.
    },
    output: {
        path: __dirname + '/public',
        filename: '[name].js',
        library: '[name]'
    },
    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.OldWatchingPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ],
    devtool: NODE_ENV == 'development' ? 'source-map' : null,

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader'],
        extensions: ['', '.js']
    },

    module: {
        loaders: [{
            test: /\.js$/,
            //Or use file .babelrc
            // loader: 'babel?presets[]=es2015'
            loader: 'babel'
        }]
    }
};

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}