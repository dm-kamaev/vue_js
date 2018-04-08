const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = module.exports = {
  // This is the "main" file which should include all other modules
  entry: '/Start/vue_js/src/main.js',
  // Where should the compiled file go?
  output: {
    // To the `dist` folder
    path: '/Start/vue_js/dist',
    // With the filename `build.js` so it's dist/build.js
    filename: 'build.js'
  },
  resolve: {
    alias: { // include template compiler
      vue: 'vue/dist/vue.min'
    }
  },
  // watch: true,
  // devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        // other vue-loader options go here
        // loaders: {}
      }
    }, {
      test: /\.html$/,
      loader: 'vue-template-loader',
      // options: {}
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new UglifyJsPlugin()
  ]
};