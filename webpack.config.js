/* eslint-disable */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const outputPath = path.resolve(__dirname, 'dist');
const serverPath = path.resolve(__dirname, 'src/server');

const htmlMinifiedOptions = isProduction ? {} : {
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

if (isProduction) {
  styleLoaders.unshift('file-loader?name=[name].css', 'extract-loader');
} else {
  styleLoaders.unshift('style-loader');
}

const config = {
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
  devtool: "#inline-source-map",
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000/api',
        pathRewrite: {"^/api": ""}
      },
      '/socket.io': {
        target: 'http://localhost:5000',
        ws: true
      }
    }
  }
};

if (isProduction) {
  const prodConfig = {
    entry: {
      client: './src/client/index.js',
      server: './src/server/index.js',
    },
    output: {
      filename: '[name].js',
      path: outputPath
    },
  };

  Object.assign(config, prodConfig);
}
else {
  const devConfig = {
    entry: './src/client/index.js',
    output: {
      filename: 'client.js',
      path: outputPath
    },
  };

  Object.assign(config, devConfig);
}

module.exports = config;
