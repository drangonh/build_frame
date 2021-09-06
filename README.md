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
