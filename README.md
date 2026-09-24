# Miike's Blog

Miike's Blog 是一个用于记录学习、开发过程和日常思考的个人博客。项目基于 [Fuwari](https://github.com/saicaca/fuwari) 模板二次定制，使用 [Astro](https://astro.build/) 构建，并结合 Tailwind CSS、Svelte 组件、Pagefind 搜索、RSS 和站点地图生成。

-示例url: [Miike_Blog](https://blog.miike.top/)

## 模板与技术栈

- 模板来源：[saicaca/fuwari](https://github.com/saicaca/fuwari)
- 核心框架：Astro 5
- 样式方案：Tailwind CSS 3、Stylus
- 交互组件：Svelte 5
- 搜索索引：Pagefind
- Markdown 增强：Expressive Code、KaTeX、GitHub admonitions
- 图片处理：Astro Image / Sharp

## 已定制内容

- 站点名称、简介、导航和个人资料已改为 Miike's Blog。
- 首页 banner、头像和 favicon 使用本项目资源。
- 主题色从原来的滑块改为四个固定色点选项，默认淡粉色。
- 文章、归档、关于页面、RSS、站点地图和全文搜索保留并可用。
- Fuwari 原模板示例文章已移到 `docs/upstream/examples/fuwari/`，不会出现在正式博客中。

## 目录结构

```text
.
├─ src/                         # 博客源码
│  ├─ assets/images/            # 站内图片资源，例如头像和 banner
│  ├─ components/               # Astro / Svelte 组件
│  ├─ content/posts/            # 博客文章
│  ├─ content/spec/about.md     # 关于页面内容
│  ├─ pages/                    # Astro 路由
│  ├─ styles/                   # 全局样式和 Markdown 样式
│  └─ config.ts                 # 站点名称、导航、头像、主题等配置
├─ public/                      # 静态公开资源
├─ docs/blog/                   # 本项目维护文档
├─ docs/upstream/               # Fuwari 原模板文档与示例
├─ scripts/                     # 辅助脚本
└─ package.json                 # 命令和依赖
```

## 本地开发

项目使用 pnpm。建议使用 Node.js 22 或更新版本。

```sh
pnpm install --frozen-lockfile
pnpm dev
```

开发服务默认运行在：

```text
http://127.0.0.1:4321/
```

## 写文章

可以用脚本创建新文章：

```sh
pnpm new-post my-post
```

文章放在 `src/content/posts/`。每篇文章使用 Markdown 和 frontmatter 管理元数据。将 `draft` 设置为 `false` 后，文章会进入正式构建。

## 常用命令

```sh
pnpm check      # Astro 类型和内容检查
pnpm build      # 构建静态站点并生成 Pagefind 索引
pnpm preview    # 预览构建结果
pnpm format     # 使用 Biome 格式化 src
pnpm lint       # 使用 Biome 检查并修复 src
```

构建产物会生成到 `dist/`，该目录是临时产物，不需要提交到 Git。

## 部署说明

`astro.config.mjs` 会读取 `SITE_URL` 环境变量作为正式站点地址；未设置时使用项目里的默认地址。部署到新域名时，先设置 `SITE_URL` 再构建，以保证 RSS、sitemap 和站点链接正确。

```sh
SITE_URL=https://example.com pnpm build
```

Windows PowerShell 可使用：

```powershell
$env:SITE_URL="https://example.com"
pnpm build
```

## 许可证

本项目保留 Fuwari 模板的 MIT License。模板版权和许可信息见 [LICENSE](./LICENSE)。
