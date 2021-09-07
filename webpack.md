# Webpack

## 引入 Webpack

- yarn add -D webpack webpack-merge webpack-cli webpack-dev-server webpackbar clean-terminal-webpack-plugin ts-loader fork-ts-checker-webpack-plugin  
  common 通用配置：包含 Webpack 基础通用 配置信息，环境中立。
  dev 开发配置：继承自 base，包含开发态的特殊配置，为开发环境。
  prod 生产配置：同样继承自 base，包含线上最终态的特殊配置，为生产环境。

- 创建:scripts/webpack/webpack.common.config.js

```
// scripts/webpack/webpack.commo.config.js

const path = require('path');

const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const ProgressBarPlugin = require('webpackbar');

module.exports = {
  entry: { index: path.resolve(__dirname, '../../src/index.tsx') },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../dist'),
    clean: true,
  },
  stats: "errors-warnings",
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [new CleanTerminalPlugin(), new ProgressBarPlugin()],
  optimization: {
    usedExports: false,
  },
};
```

- 创建 webpack.dev.config.js

```
// scripts/webpack/webpack.dev.config.js

const { merge } = require('webpack-merge');

const common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    // 添加 webpack-dev-server 开发服务器的配置
  }
});
// scripts/webpack/webpack-prod-config.js

const { merge } = require('webpack-merge');

const common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'production',
});
```

- 添加 index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>build_frame</title>
</head>
<body>
  <div id="root"></div>
  <script src="index.js"></script>
</body>
</html>
```

- 修改 package.json

```
"scripts": {
    "build": "webpack --config scripts/webpack/webpack.prod.config.js",
    "dev": "webpack serve --config scripts/webpack/webpack.dev.config.js",
    "start": "npm run dev"
  },
```

## 引入 Less 技术栈

- yarn add -D less less-loader style-loader css-loader  
  yarn add classnames

* 修改 scripts/webpack/webpack.common.config.js

```
{
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
},
```

- 我们需要在 src/types 目录中添加 less.d.ts 模块声明文件：

```
declare module '*.module.less' {
  const map: Record<string, string>;
  export = map;
}
```

## 集成 ESLint

- fork-ts-checker-webpack-plugin
- 修改 scripts/webpack/webpack.common.config.js

```
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

...

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      ...
  ]
  ...
  plugins: [
    ...
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}',
      },
    }),
  ],
};
```

## 支持模块热更新
- yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh react-refresh-typescript

## html-webpack-plugin
- 安装: yarn add -D html-webpack-plugin
- 在 webpack.common.config.js 中的 plugins 配置:
```
new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../../dist/index.html'),
      template: path.resolve(__dirname, '../../src/index.html'),
      inject: 'body',
})
```