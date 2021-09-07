// scripts/webpack/webpack.commo.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const ProgressBarPlugin = require('webpackbar');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../../src/index.tsx')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../dist'),
    clean: true,
  },
  stats: "errors-warnings",
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../../src'),
    },
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanTerminalPlugin(),
    new ProgressBarPlugin(),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}',
      },
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../../dist/index.html'),
      template: path.resolve(__dirname, '../../src/index.html'),
      inject: 'body',
    })
  ],
  optimization: {
    usedExports: false,
  },
};