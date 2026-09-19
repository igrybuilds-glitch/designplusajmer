import { useParams, Navigate } from 'react-router-dom';
import { BlogCategoryPage } from './BlogCategoryPage';
import { BlogDetailPage } from './BlogDetailPage';
import { getBlogCategory, getBlogArticleBySlug } from '../data/blogData';

interface BlogDispatcherProps {
  onOpenConsultation?: () => void;
}

export function BlogDispatcher({ onOpenConsultation }: BlogDispatcherProps) {
  const { param } = useParams<{ param?: string }>();

  if (!param) {
    return <Navigate to="/blog" replace />;
  }

  const lower = param.toLowerCase().trim();

  // 1. Check if it's a known blog category
  const categoryMeta = getBlogCategory(lower);
  if (categoryMeta) {
    return <BlogCategoryPage onOpenConsultation={onOpenConsultation} />;
  }

  // 2. Check if it's a legacy or direct article slug (e.g. /blog/structural-safety-and-architecture-in-rajasthan)
  const article = getBlogArticleBySlug(lower);
  if (article) {
    // 301/permanent-style clean canonical client redirect to hierarchical URL /blog/:category/:slug
    return <Navigate to={`/blog/${article.category}/${article.slug}`} replace />;
  }

  // 3. Fallback: unknown parameter, redirect to main blog index
  return <Navigate to="/blog" replace />;
}
