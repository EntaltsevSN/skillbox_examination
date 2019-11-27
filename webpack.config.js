let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");


let config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'bundle.js',
    publicPath: 'bundle'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ] 
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
  ]
};

module.exports = config;