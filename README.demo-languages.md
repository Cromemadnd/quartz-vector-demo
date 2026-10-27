# 演示站语言与发布

线上地址：https://cromemadnd.github.io/quartz-vector-demo/

- `quartz.config.yaml`：本地中文界面配置。
- `quartz.config.en.yaml`：线上英文界面配置。
- `/features/index-en`：英文功能导览。
- `/features/`：中文功能导览。
- `/features/infobox-en`、`/features/infobox`：同一虚构图书馆的中英文示例。

部署构建使用：

```sh
npm ci
npm run build:demo
node scripts/verify-demo.mjs
```

脚本临时启用英文配置，安装锁定提交的插件并构建；构建完成或返回错误后恢复中文配置，不需要手动覆盖文件。`public/` 是构建结果，不提交到 Git。

中文本地预览使用 `npx quartz build --serve`。文章语言与界面语言分别管理：切换中英文文章不会改变全站界面语言；部分功能示例保留中文说明，英文导览已标注。

GitHub Pages 在推送 `main` 后自动构建与部署。使用项目子路径 `/quartz-vector-demo/`，请保留相对内部链接，避免将资源写为站点根目录的绝对路径。Pages 不使用 CNAME 插件，演示站未启用访问统计。

插件来源为公开 GitHub 仓库的固定提交，不依赖本机 `.quartz/local-sources/`。如需测试未发布的本地插件，请在本地临时修改来源，并在发布前恢复公开来源。
