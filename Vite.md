# Vite

## 引入 Vite 构建器

- yarn add -D vite less vite-plugin-linter vite-react-jsx @vitejs/plugin-react-refresh  
  尽管 Vite 已经集成了 Less、SCSS 等主流的 CSS 处理器，但是你仍然需要手动安装 less。当然，在 Vite 的官方文档中，鼓励直接使用 CSS 提供的变量及 PostCSS 的嵌套语法，从而彻底抛弃 Less 等预处理器。

* 在 tsconfig.json 中将 isolatedModules 设置为 true
* 创建 vite.config.js
```
import { defineConfig } from 'vite';

import reactRefresh from '@vitejs/plugin-react-refresh';
import { EsLinter, linterPlugin } from 'vite-plugin-linter';
import reactJsx from 'vite-react-jsx';

export default defineConfig((configEnv) => {
  return {
    base: '',
    resolve: {
      alias: [{ find: '@', replacement: '/src' }],
    },
    plugins: [
      linterPlugin({
        include: [
          './src/**/*.ts',
          './src/**/*.tsx',
          './src/**/*.js',
          './src/**/*.jsx',
        ],
        linters: [new EsLinter({ configEnv })],
      }),
      reactJsx(),
      reactRefresh(),
    ],
  };
});
```

* 创建 HTML
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>vite</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="./resources/favicon.svg" />
  </head>
  <body>
    <div id="vite-root"></div>
    <script type="module" src="./src/index.tsx"></script>
  </body>
</html>
```

## 配置 package.json
```
{
  ...
  "scripts": {
    "build": "npm run build:vite",
    "build:es": "tsc",
    "build:vite": "vite build",
    "dev": "vite",
    "start": "npm run dev",
    "preview": "vite preview"
  }
}
```