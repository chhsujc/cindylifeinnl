# The Living Notebook

A bilingual personal notebook built with Astro: life in the Netherlands, travel, books, and ideas.

## Develop

Requires Node.js 22.23.4 or newer.

```sh
npm install
npm run dev -- --background
```

Open http://localhost:4321. Manage the background server with:

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

Build for production with `npm run build`. Astro writes the static website to `dist/`.

## Make it yours

- **Posts:** write Markdown files in `src/pages/posts/` using the format below. Posts appear automatically on Home, Notes, and their category page, sorted newest first.
- **Categories and reading progress:** edit `src/data/site.ts`. `src/data/articles.ts` automatically reads the Markdown metadata.
- **Homepage:** edit `src/pages/index.astro` for the introduction; edit `src/components/Sidebar.astro` for the Now list.
- **About:** edit `src/pages/about.astro` with your own biography.
- **Brand and navigation:** edit `src/layouts/Layout.astro`.
- **Colors, fonts, and responsive layouts:** edit `src/styles/global.css`.
- **Photography:** local files live in `public/images/`; maintain their credits in `photoCredits` in `src/data/site.ts`. Google Fonts provides the four reference fonts, with system fallbacks when unavailable.

The migrated example articles and sidebar updates are marked as sample content. Replace the samples and update the labels when you publish your own writing. The reading card is static; changing its progress value updates its accessible progress bar.

## Navigation and search

Home, About, Notes, Books, Travel, Life in NL, and Ideas are static pages. Notes supports shareable `?q=...` and `?tag=...` filters, including combined filters. Filtering and the mobile menu use small native browser scripts; no UI framework or backend is needed.

## Write a post

Create `src/pages/posts/my-new-post.md`:

```markdown
---
layout: ../../layouts/PostLayout.astro
title: "我的新文章"
englishTitle: "My New Post"
pubDate: "2026-11-13"
description: "A short description for the article listing."
author: "Cindy Hsu"
category: "lifeinnl"
tags: ["Netherlands", "Daily Life"]
readingMinutes: 3
image: "/images/amsterdam.jpg"
alt: "Historic houses beside an Amsterdam canal"
---

## 從這裡開始

Write your post here using **Markdown**.

- Add lists, links, and images as needed.
- The layout supplies the page title, so start body headings at `##`.
```

The filename creates `/posts/my-new-post/`. The `layout` field applies the notebook styling; `title`, `pubDate`, and `description` are required. Close the metadata block with `---` before writing the body. Quote dates as `YYYY-MM-DD`.

All other fields are optional: category defaults to `ideas`, tags to an empty list, and reading time to 1 minute. Valid categories are `books`, `travel`, `lifeinnl`, and `ideas`. Omit `image` and `alt` for a text-only post. Add `sample: true` only for demonstration articles; your own posts have no sample label by default.

Original `/notes/.../` article links redirect to their `/posts/.../` pages. Notes remains the archive and search page. For posts in subfolders, adjust the relative `layout` path accordingly.
