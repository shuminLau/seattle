# Seattle 新人落地页
### start
```vue
yarn install  // 依赖安装

// 开发调试
gulp watch          // 实时编译
gulp browser-sync   // 实时预览
```

### 目录说明
* index.html 唯一页面，使用gulp compile:twig编译，不要直接修改
* src/views twig模版通过编译生成index.html