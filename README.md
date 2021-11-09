# 记录一些前端项目中常用的配置

- `.vscode`
- commitlint
- eslint
- `.gitignore`
- prettier
- stylelint
- tsconfig.json
- vite.config.ts

### package.json

```jsonc
// 需要额外注意的两条命令
"prepare": "husky install .husky",      // init husky
"preinstall": "npx only-allow pnpm",    // only allow pnpm
```

```jsonc
// 为一些工具定义支持的浏览器
"browserslist": [
  "> 1%",           // 全球使用率大于1%的浏览器
  "last 2 versions" // 每个浏览器中最新的两个版本
]
```

### 相关依赖介绍

```bash
# 杂项
cross-env                                 # 跨平台设置环境变量
gh-pages                                  # 部署打包后的代码至 github Pages
typescript                                # 为 javascript 提供强大的类型系统

# vite
vite                                      # 一种新型前端构建工具
vite-plugin-style-import                  # 用于组件库，按需加载组件样式
@vitejs/plugin-legacy                     # 为打包后的文件提供传统浏览器兼容性支持
@vitejs/plugin-react                      # 提供完整的 React 支持

# git钩子、格式化代码
husky                                     # 一款简化使用 git hook 的工具
lint-staged                               # 为 git 暂存区文件执行指定的校验程序
prettier                                  # 格式化代码

# commitlint
commitlint                                # 校验 commit 信息
@commitlint/cli                           # 提供 commitlint 命令校验提交信息规范
@commitlint/config-conventional           # 提供 commit 信息规则

# eslint
eslint                                    # 校验 js、jsx、ts、tsx 代码
eslint-plugin-react                       # 提供一些用于校验 react 代码的规则
eslint-plugin-react-hooks                 # 提供一些用于校验 react hooks 代码的规则
eslint-plugin-simple-import-sort          # eslint 插件，用于自动对 import、export 语句以一定的规则排序
@typescript-eslint/parser                 # 一种 eslint 解析器，用于支持 eslint 解析 typescript
@typescript-eslint/eslint-plugin          # 提供一些用于校验 typescript 代码的规则
eslint-config-prettier                    # 禁用非必要的以及与 prettier 有冲突的规则

# stylelint
stylelint                                 # 校验 css、less 代码
stylelint-config-standard                 # 提供一些常用的 css 编写规则
stylelint-order                           # 强制按照某个顺序编写 css
stylelint-config-rational-order           # 提供一种 css 编写顺序的规则
stylelint-config-prettier                 # 禁用非必要的以及与 prettier 有冲突的规则

# markdownlint
markdownlint                              # 校验 markdown 文档

# postcss
autoprefixer                              # 基于caniuse.com，自动补全浏览器私有前缀
postcss-pxtorem                           # 基于配置的参数，自动转换CSS px 单位为rem
```

### 安装依赖

```bash
pnpm add -D husky lint-staged prettier

# commitlint
pnpm add -D \
  @commitlint/cli \
  @commitlint/config-conventional

# eslint
pnpm add -D \
  eslint \
  eslint-config-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-simple-import-sort \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  @types/eslint

# stylelint
pnpm add -D \
  stylelint \
  stylelint-config-standard \
  stylelint-order \
  stylelint-config-rational-order \
  stylelint-config-prettier \
  @types/stylelint
```

### 自定义 vite 插件或逻辑

- 强制用户的 vscode 必须安装指定扩展，以便更好的开发项目
- 自定义 vite eslint 插件，以支持 eslint 的警告、错误信息输出至 devServer 终端
- 自定义 vite stylelint 插件，以支持 stylelint 的警告、错误信息输出至 devServer 终端

> **反思一下 eslint，目前有三个地方用到了 eslint** （stylelint 同理）
>
> 1. vscode 的 eslint 扩展: 高亮异常代码、保存代码自动修复代码
> 2. vite 的 eslint 插件: 支持在 devServer 终端输出 eslint 的警告、错误信息，以及强制用户必须修复 eslint 错误才能继续开发
> 3. lint-staged 的自定义逻辑: 在 commit 代码前使用 eslint 校验、修复代码

### 参考

- [PostCSS 自学笔记（二）【插件篇】](https://segmentfault.com/a/1190000010934375)
- [PostCSS 常用插件与语法介绍](https://juejin.cn/post/6844903812440784910)
