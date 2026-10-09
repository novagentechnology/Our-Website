import React, { useState, useMemo } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { projectsData } from '../data/projectsData';
import type { Project } from '../types/project';
import { Button } from '../components/Button';
import { ArrowRight, Info, Filter, Layers } from 'lucide-react';

export const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Business Website', 'E-Commerce', 'Web Application', 'Healthcare System'];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-16 pb-20">
      
      {/* Page Header Banner */}
      <section className="bg-[#0B1020] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-[#22D3EE] border border-indigo-400/30 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" /> Technical Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Work & Architecture Concepts
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore our curated project demonstrations, full-stack application blueprints, and user interface concepts showcasing our software engineering practices.
          </p>
        </div>
      </section>

      {/* Demonstration Project Transparency Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 flex items-start gap-3.5">
          <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <span className="font-semibold text-slate-900">Demonstration & Concept Notice: </span>
            The projects featured in this portfolio are functional architectural prototypes and demonstration concepts built by Nova@Gen Technologies to showcase full-stack capabilities, UI/UX craft, and engineering standards. They are clearly identified as concept projects.
          </div>
        </div>
      </section>

      {/* Filter Tabs & Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="hidden sm:flex items-center gap-1 text-xs font-semibold text-slate-500 mr-2 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#0B1020] text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-500">No demonstration projects found in this category.</p>
          </div>
        )}
      </section>

      {/* Project Discussion CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-gradient-to-r from-[#0B1020] to-[#161F37] rounded-3xl p-8 sm:p-12 border border-slate-800 text-center text-white space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Need a Custom Application Built to Exact Specifications?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Whether you need a performant business website, an internal workflow dashboard, or an integrated REST API, we can architect and develop your solution.
          </p>
          <div>
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start a Project Discussion
            </Button>
          </div>
        </div>
      </section>

      {/* Modal Detail View */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
};
