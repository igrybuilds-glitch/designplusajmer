import { BlogArticle, BlogCategory, BlogAuthor, BlogTag } from '../../types/blog';
import { BLOG_ARTICLES, getAllArticles, getArticleBySlug, getArticlesByCategory, getArticlesByTag, getArticlesByAuthor, getPillarArticles, getFeaturedArticles, getRelatedArticles } from './articles';
import { BLOG_CATEGORIES, getCategoryBySlug, getAllCategories } from './categories';
import { BLOG_AUTHORS, getAuthorBySlug, getAllAuthors } from './authors';
import { BLOG_TAGS, getTagBySlug, getAllTags } from './tags';

export interface BlogSearchFilter {
  category?: string;
  tag?: string;
  author?: string;
  searchQuery?: string;
  isPillar?: boolean;
}

export const BlogApi = {
  // Articles
  getAllArticles: () => getAllArticles(),
  getArticleBySlug: (slug: string) => getArticleBySlug(slug),
  getArticlesByCategory: (categorySlug: string) => getArticlesByCategory(categorySlug),
  getArticlesByTag: (tagSlug: string) => getArticlesByTag(tagSlug),
  getArticlesByAuthor: (authorSlug: string) => getArticlesByAuthor(authorSlug),
  getPillarArticles: () => getPillarArticles(),
  getFeaturedArticles: () => getFeaturedArticles(),
  getRelatedArticles: (slug: string, count: number = 3) => getRelatedArticles(slug, count),
  
  // Search & Filtering
  filterArticles: (filters: BlogSearchFilter): BlogArticle[] => {
    let result = getAllArticles();

    if (filters.category && filters.category !== 'all') {
      result = result.filter(a => a.category.toLowerCase() === filters.category!.toLowerCase());
    }

    if (filters.tag) {
      result = result.filter(a => a.tags.some(t => t.toLowerCase() === filters.tag!.toLowerCase()));
    }

    if (filters.author) {
      result = result.filter(a => a.author.slug.toLowerCase() === filters.author!.toLowerCase());
    }

    if (filters.isPillar !== undefined) {
      result = result.filter(a => !!a.isPillar === filters.isPillar);
    }

    if (filters.searchQuery && filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase().trim();
      result = result.filter(a => 
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags.some(t => t.toLowerCase().includes(q)) ||
        a.category.toLowerCase().includes(q)
      );
    }

    return result;
  },

  // Categories
  getAllCategories: () => getAllCategories(),
  getCategoryBySlug: (slug: string) => getCategoryBySlug(slug),
  
  // Authors
  getAllAuthors: () => getAllAuthors(),
  getAuthorBySlug: (slug: string) => getAuthorBySlug(slug),

  // Tags
  getAllTags: () => getAllTags(),
  getTagBySlug: (slug: string) => getTagBySlug(slug),

  // Editorial Roadmap & Statistics
  getBlogStats: () => {
    const articles = getAllArticles();
    const categories = getAllCategories();
    const authors = getAllAuthors();
    const tags = getAllTags();
    const pillars = getPillarArticles();

    return {
      totalArticles: articles.length,
      publishedArticles: articles.filter(a => a.status === 'published').length,
      draftArticles: articles.filter(a => a.status === 'draft').length,
      pillarCount: pillars.length,
      categoryCount: categories.length,
      authorCount: authors.length,
      tagCount: tags.length,
      totalWordCount: articles.reduce((sum, a) => sum + (a.wordCount || 0), 0)
    };
  }
};

export default BlogApi;
