'use strict';

let webpack = require("webpack");
module.exports = {
    entry: "./home",
    output: {
        filename: "build.js",
        library: "home"
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    }
    ,
    plugins: [
        new webpack.OldWatchingPlugin()
    ]
};