/* global module */
module.exports = {
  entry: './src/app.js',
  output: {
    path: './public',
    filename: 'app.js'
  },
  vue: {
    loaders: {
      js: 'babel?presets[]=es2015!eslint'
    }
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
                presets: ['es2015']
              }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
         query: {
                    presets: ['es2015']
                }
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
};