# Miike's Blog

基于 [Fuwari](https://github.com/saicaca/fuwari)，使用 Astro + Tailwind CSS。

## 本地开发

需要 Node.js 22 或更新版本，以及 pnpm 9.14.4。

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## 写文章

```sh
pnpm new-post my-post
```

编辑 `src/content/posts/` 中的 Markdown 文件。设置 `draft: false` 后文章会出现在正式构建中。模板示例已移到 `docs/examples/`，不会发布。

## 个人资料

- `src/config.ts`：名称、简介、头像、导航和主题色。
- `src/content/spec/about.md`：关于页面。
- `public/favicon/miike.svg`：头像和站点图标。

## 构建与预览

```sh
pnpm check
pnpm build
pnpm preview
```

构建输出在 `dist/`，包含 Pagefind 搜索索引、RSS 和站点地图。
部署到其他域名时，在构建前设置 `SITE_URL` 为正式网址（例如 `https://blog.example.com`），再重新构建。

保留原项目的 MIT 许可证，见 LICENSE。
