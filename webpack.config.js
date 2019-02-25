const path = require('path');

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }, module: {
    rules: [
      { test: /\.js$/, exclude: /node-modules/, use: 'babel-loader' },
      {
          test: /\.css$/,
          use: [
            { loader: "style-loader/url" },
            { loader: "file-loader" }
          ]
        },
      //   {
      //     test: /\.scss$/,
      //     use: [
      //         "style-loader/url", // creates style nodes from JS strings
      //         "file-loader", // translates CSS into CommonJS
      //         "sass-loader" // compiles Sass to CSS, using Node Sass by default
      //     ]
      // },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader/url', // inject CSS to page
        }, {
          loader: 'file-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run postcss actions
          options: {
            plugins: function () { // postcss plugins, can be exported to postcss.config.js
              return [
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    port: 3000
  }

};