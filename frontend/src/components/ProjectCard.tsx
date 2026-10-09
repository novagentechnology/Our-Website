import React from 'react';
import type { Project } from '../types/project';
import { 
  Building2, 
  ShoppingCart, 
  KanbanSquare, 
  Activity, 
  ArrowRight, 
  Info,
  Layers,
  Sparkles
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2': return <Building2 className="w-8 h-8 text-white/90" />;
      case 'ShoppingCart': return <ShoppingCart className="w-8 h-8 text-white/90" />;
      case 'KanbanSquare': return <KanbanSquare className="w-8 h-8 text-white/90" />;
      case 'Activity': return <Activity className="w-8 h-8 text-white/90" />;
      default: return <Layers className="w-8 h-8 text-white/90" />;
    }
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-subtle hover:shadow-card hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Project Visual / Thumbnail Representation */}
        <div className={`relative h-48 bg-gradient-to-br ${project.previewGradient} bg-[#0B1020] p-6 flex flex-col justify-between overflow-hidden`}>
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-cyan-300 border border-cyan-400/30 uppercase tracking-wider">
              {project.category}
            </span>

            {project.isDemonstration && (
              <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-500/20 backdrop-blur-md text-amber-300 border border-amber-400/30" title="Demonstration Concept">
                <Info className="w-3 h-3" /> Concept / Demo
              </span>
            )}
          </div>

          <div className="relative z-10 flex items-center gap-3">
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-inner">
              {getIcon(project.iconName)}
            </div>
            {project.metricsLabel && (
              <div className="text-xs text-slate-200 font-medium bg-black/40 px-2.5 py-1 rounded backdrop-blur-sm border border-white/10">
                {project.metricsLabel}
              </div>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#0B1020] mb-2 group-hover:text-[#6366F1] transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {project.shortDescription}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.techStack.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-[11px] font-medium px-1.5 py-0.5 rounded bg-slate-50 text-slate-400">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer CTA */}
      <div className="p-6 pt-0">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-indigo-50 text-[#6366F1] hover:bg-[#6366F1] hover:text-white transition-all duration-200"
        >
          <Sparkles className="w-3.5 h-3.5" /> View Project Architecture <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
