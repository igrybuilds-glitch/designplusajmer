// Centralized re-export & compatibility bridge for blog data
export * from './blogCategories';
export * from './blog';

import { BLOG_CATEGORIES, getBlogCategories, getBlogCategory, getBlogCategoryBySlug } from './blogCategories';
import { 
  BLOG_ARTICLES, 
  getAllBlogArticles, 
  getBlogArticlesByCategory, 
  getBlogArticle, 
  getBlogArticleBySlug, 
  getFeaturedBlogArticles,
  getRelatedBlogArticles 
} from './blog';

export {
  BLOG_CATEGORIES,
  getBlogCategories,
  getBlogCategory,
  getBlogCategoryBySlug,
  BLOG_ARTICLES,
  getAllBlogArticles,
  getBlogArticlesByCategory,
  getBlogArticle,
  getBlogArticleBySlug,
  getFeaturedBlogArticles,
  getRelatedBlogArticles
};

export default {
  categories: BLOG_CATEGORIES,
  articles: BLOG_ARTICLES
};
