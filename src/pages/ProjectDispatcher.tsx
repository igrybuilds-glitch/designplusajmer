import { useParams, Navigate } from 'react-router-dom';
import { ProjectsPage } from './ProjectsPage';
import { getProjectBySlug } from '../data/projectsData';

interface ProjectDispatcherProps {
  onOpenConsultation?: () => void;
}

const KNOWN_CATEGORIES = new Set([
  'all',
  'residential',
  'commercial',
  'interior',
  'interiors',
  'structural',
  'institutional',
  'industrial',
  'concept',
  'concepts'
]);

export function ProjectDispatcher({ onOpenConsultation }: ProjectDispatcherProps) {
  const { param } = useParams<{ param?: string }>();

  if (!param) {
    return <ProjectsPage />;
  }

  const lower = param.toLowerCase().trim();

  // If it's a known category, render ProjectsPage with that category pre-selected
  if (KNOWN_CATEGORIES.has(lower)) {
    const normalizedCategory = lower === 'concepts' ? 'concept' : (lower === 'interiors' ? 'interior' : lower);
    return <ProjectsPage initialCategory={normalizedCategory} />;
  }

  // Check if it's an existing project slug; if so, redirect to canonical /projects/:category/:slug
  const project = getProjectBySlug(lower);
  if (project) {
    return <Navigate to={`/projects/${project.category}/${project.slug}`} replace />;
  }

  // Default fallback: if someone typed an unknown slug or category
  return <Navigate to="/projects" replace />;
}
