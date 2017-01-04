/* global require, module */
const webpack = require('webpack');
const base = require('./webpack.config');


const config = Object.assign({}, base, {
  plugins: [
      // short-circuits all Vue.js warning code
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      // minify with dead-code elimination
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      // optimize module ids by occurence count
      new webpack.optimize.OccurenceOrderPlugin()
    ]
});


module.exports = config;