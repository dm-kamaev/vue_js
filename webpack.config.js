module.exports = {
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
      vue: 'vue/dist/vue.js'
    }
  },
  watch: true,
  devtool: 'source-map',
  module: {
    // Special compilation rules
    loaders: [
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: /\.js$/,
        // Transform it with babel
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        },
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /node_modules/
      },
    ],
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: {
        //   // настройки vue-loader
        // }
      },
      {
        test: /\.html$/,
        use: 'vue-template-loader'
      }
    ]
  }
}
