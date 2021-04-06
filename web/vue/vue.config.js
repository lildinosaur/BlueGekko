const CopyWebpackPlugin = require('copy-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');

module.exports = {
  configureWebpack: {
    entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.ttf$/,
      use: ['file-loader']
    }]
  },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: '../baseUIconfig.js',
          to: '../public/UIconfig.js'
        },
        {
          from: '../baseUIconfig.js',
          to: 'UIconfig.js'
        },
      ]),
      new MonacoWebpackPlugin()
    ]
  },
  baseUrl: ''
}