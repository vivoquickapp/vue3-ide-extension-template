# IDE 插件模板

## 简介
该插件模板融合了 `Vue3 + Vuex + vue-i18n + typescript`，方便在 vscode 的 webview 中开发前端项目。

## 如何开发

### 安装依赖

```shell
yarn && cd frontend &&  yarn
```

### 监听代码
- 在项目的根目录执行 `yarn watch`，以监听插件的代码。
- 在 frontend 目录下执行 `yarn watch`，以监听前端 Vue 项目的代码。

### 运行和调试
1. 点击侧边栏「**运行和调试**」，点击 Run Extension 运行插件。

2. 在弹出的 vscode 编辑器运行 `cmd + shift + p`，输入 `show panel` 打开 webview 面板。