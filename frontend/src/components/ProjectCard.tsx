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
    <div className="group bg-white rounded-[6px] border border-[#EBEEF4] overflow-hidden shadow-[0_8px_30px_rgba(20,35,65,0.055)] hover:shadow-[0_14px_35px_rgba(20,35,65,0.09)] hover:border-blue-200 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        {/* Project Visual / Thumbnail Representation */}
        <div className={`relative h-52 bg-gradient-to-br ${project.previewGradient} bg-[#090F1E] p-5 flex flex-col justify-between overflow-hidden`}>
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
            />
          ) : null}

          {/* Balanced gradient overlay so photo is clearly visible while badges remain 100% readable */}
          <div 
            className="absolute inset-0"
            style={{
              background: project.imageUrl
                ? 'linear-gradient(to top, rgba(9, 15, 30, 0.88) 0%, rgba(9, 15, 30, 0.45) 50%, rgba(9, 15, 30, 0.35) 100%)'
                : 'rgba(9, 15, 30, 0.40)'
            }}
          />
          
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-[3px] bg-slate-900/85 backdrop-blur-md text-white border border-white/20 uppercase tracking-wider shadow-sm">
              {project.category}
            </span>

            {project.isDemonstration && (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-[3px] bg-amber-500/25 backdrop-blur-md text-amber-200 border border-amber-400/40 shadow-sm" title="Demonstration Concept">
                <Info className="w-3 h-3" /> Concept / Demo
              </span>
            )}
          </div>

          <div className="relative z-10 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/20 shadow-md">
              {getIcon(project.iconName)}
            </div>
            {project.metricsLabel && (
              <div className="text-xs text-white font-medium bg-black/55 px-3 py-1.5 rounded-[3px] backdrop-blur-md border border-white/15 shadow-sm">
                {project.metricsLabel}
              </div>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#171B26] mb-2 group-hover:text-[#0865F5] transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#777B86] line-clamp-2 leading-relaxed mb-4">
            {project.shortDescription}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.techStack.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="text-[10px] font-semibold px-2 py-0.5 rounded-[3px] bg-[#F8FAFC] text-[#777B86] border border-[#EBEEF4]"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-[3px] bg-[#F8FAFC] text-[#777B86]">
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
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-[3px] bg-[#F3F6FD] text-[#0865F5] hover:bg-[#0865F5] hover:text-white transition-all duration-200"
        >
          <Sparkles className="w-3.5 h-3.5" /> View Project Architecture <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
