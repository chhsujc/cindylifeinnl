import { categories, type Category } from './site';

/** Metadata written between the --- lines of a post's Markdown file. */
export interface PostFrontmatter {
  title: string;
  pubDate: string | Date;
  description: string;
  layout?: string;
  englishTitle?: string;
  author?: string;
  category?: Category;
  tags?: string[];
  readingMinutes?: number;
  image?: string;
  alt?: string;
  sample?: boolean;
}

export interface Article {
  slug: string;
  url: string;
  title: string;
  englishTitle?: string;
  author?: string;
  date: string;
  excerpt: string;
  category: Category;
  tags: string[];
  readingMinutes: number;
  image?: string;
  alt: string;
  sample: boolean;
}

export function normalizePost(frontmatter: PostFrontmatter, url: string): Article {
  const { title, pubDate, description } = frontmatter;
  if (!title || !pubDate || !description) {
    throw new Error(`${url}: Markdown posts require title, pubDate, and description.`);
  }
  const date = new Date(pubDate);
  if (Number.isNaN(date.getTime())) {
    throw new Error(`${url}: pubDate must be a valid date, e.g. "2026-11-13".`);
  }
  const category = frontmatter.category ?? 'ideas';
  if (!categories.some(item => item.id === category)) {
    throw new Error(`${url}: category must be books, travel, lifeinnl, or ideas.`);
  }
  return {
    slug: url.split('/').filter(Boolean).at(-1)!,
    url: url.replace(/\/?$/, '/'),
    title,
    englishTitle: frontmatter.englishTitle,
    author: frontmatter.author,
    date: date.toISOString().slice(0, 10),
    excerpt: description,
    category,
    tags: frontmatter.tags ?? [],
    readingMinutes: frontmatter.readingMinutes ?? 1,
    image: frontmatter.image,
    alt: frontmatter.alt ?? '',
    sample: frontmatter.sample ?? false,
  };
}
