import React, { useEffect } from 'react';
import type { Project } from '../types/project';
import { 
  X, 
  CheckCircle, 
  Lightbulb, 
  Layers, 
  Code, 
  ArrowRight, 
  AlertCircle, 
  Terminal 
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Banner */}
        <div className={`relative bg-gradient-to-r ${project.previewGradient} bg-[#0B1020] p-6 sm:p-8 text-white flex-shrink-0`}>
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-400/20 text-cyan-200 border border-cyan-400/30 uppercase tracking-wider">
                {project.category}
              </span>
              {project.isDemonstration && (
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> Concept & Demonstration Project
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 divide-y divide-slate-100">
          
          {/* Overview */}
          <div>
            <h3 className="text-base font-bold text-[#0B1020] mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#6366F1]" /> Project Overview
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50/50 border border-red-100 rounded-xl p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-2">
                The Problem Statement
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                Proposed Solution & Architecture
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.proposedSolution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="pt-6">
            <h3 className="text-base font-bold text-[#0B1020] mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#6366F1]" /> Key Implementation Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] mt-1.5 flex-shrink-0"></span>
                  <span className="text-xs sm:text-sm text-slate-700 leading-normal">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="pt-6">
            <h3 className="text-base font-bold text-[#0B1020] mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 text-[#6366F1]" /> Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="pt-6">
            <h3 className="text-base font-bold text-[#0B1020] mb-3 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-500" /> Development Considerations & Lessons Learned
            </h3>
            <ul className="space-y-2">
              {project.lessonsLearned.map((lesson, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 bg-amber-50/40 p-3 rounded-lg border border-amber-100">
                  <Terminal className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0">
          <div className="text-xs text-slate-500">
            Interested in building a similar solution for your company?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-100"
            >
              Close Preview
            </button>
            <Link
              to={`/contact?project=${encodeURIComponent(project.title)}`}
              onClick={onClose}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-semibold rounded-lg bg-[#6366F1] text-white hover:bg-[#4F46E5] shadow-md shadow-indigo-500/20"
            >
              Discuss Similar Project <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
