import { useParams, Navigate } from 'react-router-dom';
import { BlogCategoryPage } from './BlogCategoryPage';
import { BlogDetailPage } from './BlogDetailPage';
import { BlogTagPage } from './BlogTagPage';
import { BlogAuthorPage } from './BlogAuthorPage';
import { BlogApi } from '../content/blog/api';

interface BlogDispatcherProps {
  onOpenConsultation?: () => void;
}

export function BlogDispatcher({ onOpenConsultation }: BlogDispatcherProps) {
  const { param } = useParams<{ param?: string }>();

  if (!param) {
    return <Navigate to="/blog" replace />;
  }

  const lower = param.toLowerCase().trim();

  // 1. Check if it's an article slug (Primary: /blog/[slug])
  const article = BlogApi.getArticleBySlug(lower);
  if (article) {
    return <BlogDetailPage onOpenConsultation={onOpenConsultation} />;
  }

  // 2. Check if it's a known blog category (e.g. /blog/architecture, /blog/structural-engineering)
  const categoryMeta = BlogApi.getCategoryBySlug(lower);
  if (categoryMeta) {
    return <BlogCategoryPage onOpenConsultation={onOpenConsultation} />;
  }

  // 3. Check if it's a known author (e.g. /blog/sudhir-soni)
  const author = BlogApi.getAuthorBySlug(lower);
  if (author) {
    return <BlogAuthorPage onOpenConsultation={onOpenConsultation} />;
  }

  // 4. Check if it's a known tag
  const tag = BlogApi.getTagBySlug(lower);
  if (tag) {
    return <BlogTagPage onOpenConsultation={onOpenConsultation} />;
  }

  // 5. Fallback: unknown parameter, redirect to main blog index
  return <Navigate to="/blog" replace />;
}
