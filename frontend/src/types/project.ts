export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'Business Website' | 'E-Commerce' | 'Web Application' | 'Healthcare System' | 'Enterprise Solution';
  shortDescription: string;
  overview: string;
  problemStatement: string;
  proposedSolution: string;
  keyFeatures: string[];
  techStack: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  isDemonstration: boolean;
  lessonsLearned: string[];
  previewGradient: string;
  iconName: string;
  metricsLabel?: string;
}
