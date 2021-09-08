/**
 * vite-plugin-linter：Vite 的插件体系还正在不断成长中，我找了 3 个 ESLint 相关的插件，
 * 最后只有这一个完全符合我们的要求，它可以和 Webpack 的 Fork TS Check 插件一样启动一个子进程执行 
 * ESLint 等类型校验，并且还支持其他的校验工具。
 * 
 * plugin-react-refresh：这个插件可以实现 React 热模块更新的功能。
 * 
 * vite-react-jsx：因为我们在 tsconfig.json 中开启了 react-jsx 开关，
 * 即使用了 React 17 之后的免去 import React from 'react' 声明的特性，
 * 因此我们需要引入这个插件。
 */
import reactRefresh from '@vitejs/plugin-react-refresh';
import {
  defineConfig
} from 'vite';
import reactJsx from 'vite-react-jsx';


export default defineConfig({
  base: '',
  resolve: {
    alias: [{
      find: '@',
      replacement: '/src'
    }],
  },
  plugins: [
    reactJsx(),
    reactRefresh(),
  ],
});