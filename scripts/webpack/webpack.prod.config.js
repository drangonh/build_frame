// scripts/webpack/webpack-prod-config.js

const {
  merge
} = require('webpack-merge');

const common = require('./webpack.common.config');

const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin()
  ]
});