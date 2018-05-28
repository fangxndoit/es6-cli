var webpack = require('webpack');
var path = require('path');

module.exports = {
/*     entry: './module/import.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    }, */
    module: {
        loaders: [
            {test:/\.js$/, loader: 'babel-loader'}
        ]
    }
}