# build_frame

框架搭建

## 新增.gitignore

```
# MacOS / Windows 等系统文件
.DS_Store
Thumbs.db

# Node 依赖目录
node_modules/

# 输出目录
/dist
*.tsbuildinfo

# 日志
*.log

# 运行时数据
pids
*.pid
*.pid.lock

# 集成开发环境配置文件
/.vscode

# ESLint 缓存
.eslintcache
```

## git 代码提交管控

- yarn add -D husky lint-staged @commitlint/config-conventional @commitlint/cli
- 新增.lintstagedrc.json 文件

```
{
  "*.{js,jsx,ts,tsx}": ["eslint --cache"]
}
```

- 新增 commitlint.config.js

```
module.exports = { extends: ['@commitlint/config-conventional'] };
```

- 安装 husky,npm install -D husky

- 新建文件夹:.husky
  npx husky add .husky/pre-commit "npx --no-install lint-staged"
  npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

## git 代码管控交互式方案

- yarn add -D commitizen cz-conventional-changelog @commitlint/config-conventional @commitlint/cli commitlint-config-cz cz-customizable husky
- package.json 配置

```
"scripts": {
  "commit":"git-cz",
},

"config": {
    "commitizen": {
      "path": "node_modules/cz-customizable"
    }
},


"husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
}
```

- commitlint.config.js

```
module.exports = {
  extents: [
    "@commitlint/config-conventional",
    "cz"
  ],
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'improvement',
        'perf',
        'refactor',
        'revert',
        'style',
        'test'
      ]
    ]
  }
}
```

- 新建.cz-config.js

```
module.exports = {
  types: [
    {      value: 'init',      name: 'init:     初始提交'    },
    {      value: 'feat',      name: 'feat:     增加新功能'    },
    {      value: 'fix',      name: 'fix:      修复bug'    },
    {      value: 'ui',      name: 'ui:       更新UI'    },
    {      value: 'refactor',      name: 'refactor: 代码重构'    },
    {      value: 'release',      name: 'release:  发布'    },
    {      value: 'deploy',      name: 'deploy:   部署'    },
    {      value: 'docs',      name: 'docs:     修改文档'    },
    {      value: 'test',      name: 'test:     增删测试'    },
    {      value: 'chore',      name: 'chore:    更改配置文件'    },
    {      value: 'style',      name: 'style:    代码样式修改不影响逻辑'    },
    {      value: 'revert',      name: 'revert:   版本回退'    },
    {      value: 'add',      name: 'add:      添加依赖'    },
    {      value: 'minus',      name: 'minus:    版本回退'    },
    {      value: 'del',      name: 'del:      删除代码/文件'    }
  ],
  scopes: [],
  messages: {
    type: '选择更改类型:\n',
    scope: '更改的范围:\n',
    // 如果allowcustomscopes为true，则使用
    // customScope: 'Denote the SCOPE of this change:',
    subject: '简短描述:\n',
    body: '详细描述. 使用"|"换行:\n',
    breaking: 'Breaking Changes列表:\n',
    footer: '关闭的issues列表. E.g.: #31, #34:\n',
    confirmCommit: '确认提交?'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"]
};
```

- 代码提交
  git add .
  yarn commit
  git push

## TypeScript

- yarn add -D typescript && npx tsc --init  
  incremental 设置为 true，允许增量编译，有助于加快编译速度。
  target 设置为 ESNEXT，即直接输出为最新的 ES 标准。
  module 设置为 ESNext，即面向未来的 ESM 模块化。
  allowJS 及 checkJS 设置为 true，允许编译 JavaScript 文件。
  jsx 设置为 react-jsx，本文中我们不会使用到 Babel，因此是直接通过 TSC 将 JSX 代码片段编译为 JS 代码片段。 另外，react-jsx 是 TypeScript 在 4.1 引入的新特性，它可以让我们不需要再每一个 JSX / TSX 文件中写 import React from 'react'语句。
  outDir 设置为 ./dist/es，dist 是我们的发行（distribution）根目录，而 es 是我们默认的 ESM 模块发行目录。
  rootDir 设置为 ./src，这是我们存放源代码的目录，请顺手创建。
  strict 改为 true，即启用所有严格类型检查选项。
  moduleResolution 改为 node，将模块解析模式设为 Node.js。
  allowSyntheticDefaultImports 改为 true，这样可以让 import React from 'react' 这样的语句不会报错。当然如今 esModuleInterop 已经默认开启，也会起到隐式声明的作用。
  如果你和我一样需要用到 decorator 特性，需要将 experimentalDecorators 和 emitDecoratorMetadata 改为 true
  如果开发的是一个 NPM 包项目，declaration 需要改为 true。
  最后加上 include 和 exclude 选项，告诉编译器需要编译和忽略什么。

## Prettier 代码格式化

- yarn add -D prettier
- .prettierrc

```
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

- 在 VSCode 中，通过在 Workspace 配置文件中选中 Editor: Format On Save 选项实现保存前自动格式化。

# 参考链接:

[react+ts 项目搭建](https://zhuanlan.zhihu.com/p/403970666)  
[commit 规范方案探讨](https://www.cnblogs.com/dahe1989/p/13803548.html)
