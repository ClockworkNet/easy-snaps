module.exports = {
  entry: './src/app.js',
  output: {
    path: './public',
    filename: 'app.js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
    }
  },
  vue: {
    loaders: {
      js: 'babel?presets[]=es2015!jshint'
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