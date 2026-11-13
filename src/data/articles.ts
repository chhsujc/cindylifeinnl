import type { MarkdownInstance } from 'astro';
import { normalizePost, type PostFrontmatter } from './post';

export { categories, reading, photoCredits } from './site';
export type { Category } from './site';
export type { Article } from './post';

// Astro creates the post routes; this imports their metadata for the listings.
const posts = import.meta.glob<MarkdownInstance<PostFrontmatter>>('../pages/posts/**/*.md', {
  eager: true,
});

export const articles = Object.values(posts)
  .map(post => normalizePost(post.frontmatter, post.url!))
  .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));

export const tags = [...new Set(articles.flatMap(article => article.tags))];
