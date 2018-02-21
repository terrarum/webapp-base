/* eslint-disable */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const production = process.env.NODE_ENV === 'production';
const outputPath = path.resolve(__dirname, 'dist');
const serverPath = path.resolve(__dirname, 'src/server');

const htmlMinifiedOptions = production ? {} : {
  collapseWhitespace: true,
  removeRedundantAttributes: true
};

const htmlWebpackOptions = {
  minify: htmlMinifiedOptions,
  hash: true,
  template: 'src/client/index.html',
  inject: 'body'
};

const styleLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader',
];

if (production) {
  styleLoaders.unshift('file-loader?name=[name].css', 'extract-loader');
} else {
  styleLoaders.unshift('style-loader');
}

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'client.js',
    path: outputPath
  },
  plugins: [
    new CleanWebpackPlugin(outputPath),
    new HtmlWebpackPlugin(htmlWebpackOptions)
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: styleLoaders
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  devtool: "#inline-source-map"
};
