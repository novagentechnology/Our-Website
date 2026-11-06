import React, { useState, useMemo } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { projectsData } from '../data/projectsData';
import type { Project } from '../types/project';
import { Button } from '../components/Button';
import { ArrowRight, Info } from 'lucide-react';

export const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Business Website', 'E-Commerce', 'Web Application', 'Healthcare System'];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-16 sm:space-y-20 pb-20 bg-white">
      
      {/* Page Header Banner with Bright Digital Systems & Architecture Visual */}
      <section className="relative text-white py-16 sm:py-24 overflow-hidden bg-[#090F1E] min-h-[360px] flex items-center justify-center">
        <img
          src="/it-portfolio-banner.jpg"
          alt="Technical Architecture & Digital Analytics Systems"
          className="absolute inset-0 w-full h-full object-cover object-center select-none"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(9, 15, 30, 0.72) 0%, rgba(9, 15, 30, 0.52) 55%, rgba(8, 101, 245, 0.28) 100%)'
          }}
        />
        <div className="absolute inset-0 bg-tech-circuit opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-[1160px] w-full mx-auto px-4 sm:px-6 text-center">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#0865F5] bg-white/10 backdrop-blur-sm border border-white/15 px-3.5 py-1.5 rounded-[3px] inline-block mb-4 select-none">
            TECHNICAL PORTFOLIO
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto mb-4">
            Our Work &amp; Architecture Concepts
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto">
            Explore our curated project demonstrations, full-stack application blueprints, and user interface concepts showcasing our software engineering craft.
          </p>
        </div>
      </section>

      {/* Demonstration Project Transparency Notice */}
      <section className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="p-4 sm:p-5 rounded-[4px] bg-[#F3F6FD] border border-blue-100 text-[#171B26] flex items-start gap-3.5">
          <Info className="w-5 h-5 text-[#0865F5] flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#777B86] leading-relaxed">
            <span className="font-semibold text-[#171B26]">Demonstration &amp; Concept Notice: </span>
            The projects featured in this portfolio are functional architectural prototypes and demonstration concepts built by Nova@Gen Technologies to showcase full-stack capabilities, UI/UX craft, and engineering standards.
          </div>
        </div>
      </section>

      {/* Filter Tabs & Projects Grid */}
      <section className="max-w-[1160px] mx-auto px-4 sm:px-6">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-[3px] text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-[#0865F5] text-white shadow-md'
                  : 'bg-white text-[#777B86] border border-[#EBEEF4] hover:bg-slate-50 hover:text-[#171B26]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Bottom CTA */}
      <section className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="bg-[#f8f9fc] rounded-[6px] p-8 sm:p-12 text-center border border-[#EBEEF4] space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171B26]">
            Have a Specific Concept in Mind?
          </h2>
          <p className="text-sm text-[#777B86] max-w-xl mx-auto">
            We can architect and build custom proof-of-concepts, MVPs, or full-scale web platforms based on your exact business workflow.
          </p>
          <div className="pt-2">
            <Button
              to="/contact"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request a Technical Architecture Review
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};
