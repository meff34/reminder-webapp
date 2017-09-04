const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.jsx',
  output: { path: path.resolve(__dirname, 'public'), filename: 'bundle.js' },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [__dirname, 'node_modules']
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};