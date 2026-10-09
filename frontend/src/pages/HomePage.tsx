import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Shield, 
  Zap, 
  Users, 
  Layers, 
  Activity,
  Cpu,
  MonitorSmartphone
} from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import type { Project } from '../types/project';

export const HomePage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredServices = servicesData.slice(0, 3);
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="space-y-24 md:space-y-32 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B1020] text-white pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#6366F1]/20 via-[#22D3EE]/15 to-transparent blur-3xl rounded-full pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Hero Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-medium text-[#22D3EE] backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>Building Digital Solutions for Tomorrow</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                We Build Digital Experiences That{' '}
                <span className="bg-gradient-to-r from-[#6366F1] via-[#818CF8] to-[#22D3EE] bg-clip-text text-transparent">
                  Drive Growth.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                From modern websites to custom software applications, Nova@Gen Technologies helps businesses turn ideas into practical, reliable, and scalable digital solutions.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  to="/portfolio"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore Our Work
                </Button>
                <Button
                  to="/contact"
                  variant="outline"
                  size="lg"
                  className="text-white border-slate-700 bg-slate-900/60 hover:bg-slate-800 hover:text-white"
                >
                  Discuss Your Project
                </Button>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="text-lg sm:text-xl font-bold text-white flex items-center justify-center lg:justify-start gap-1">
                    <Zap className="w-4 h-4 text-[#22D3EE]" /> High Speed
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">Optimized Performance</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-white flex items-center justify-center lg:justify-start gap-1">
                    <Shield className="w-4 h-4 text-[#6366F1]" /> Clean Code
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">Maintainable Architecture</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-white flex items-center justify-center lg:justify-start gap-1">
                    <MonitorSmartphone className="w-4 h-4 text-[#22D3EE]" /> Responsive
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">Mobile-First Quality</div>
                </div>
              </div>
            </div>

            {/* Right Column: Sophisticated 3D Logo & Tech Interface Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-900/95 border border-slate-700/80 p-5 shadow-2xl backdrop-blur-md space-y-4">
                
                {/* 3D Office Wall Brand Logo Frame (Uncropped) */}
                <div className="rounded-xl overflow-hidden border border-slate-700/60 shadow-lg bg-black/40 relative group">
                  <img
                    src="/brand-mockup.jpg"
                    alt="Nova@Gen Technologies 3D Brand Emblem"
                    className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
                  />
                  <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-md bg-[#0B1020]/85 backdrop-blur-md border border-cyan-400/30 text-[10px] font-mono text-cyan-300 font-semibold">
                    Official Brand Emblem
                  </div>
                </div>

                {/* Micro tech dashboard preview */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-lg bg-slate-800/90 border border-slate-700/60">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold flex items-center justify-between">
                      API Health <Activity className="w-3 h-3 text-emerald-400" />
                    </div>
                    <div className="text-base font-bold text-white mt-1">99.9% Uptime</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">REST Services Active</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/90 border border-slate-700/60">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold flex items-center justify-between">
                      Architecture <Cpu className="w-3 h-3 text-[#22D3EE]" />
                    </div>
                    <div className="text-base font-bold text-white mt-1">Full-Stack</div>
                    <div className="text-[10px] text-slate-300 mt-0.5">Spring Boot & React</div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="p-2.5 rounded-lg bg-[#6366F1]/10 border border-[#6366F1]/30 flex items-center gap-2.5 text-xs text-indigo-200">
                  <Sparkles className="w-4 h-4 text-[#22D3EE] flex-shrink-0" />
                  <span>Custom digital systems tailored for startups & growing enterprises.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="What We Do"
          title="Engineered Services For"
          highlight="Modern Businesses"
          description="We provide comprehensive software engineering, web application development, and user experience design tailored to your specific business requirements."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, idx) => (
            <ServiceCard key={service.id} service={service} featured={idx === 0} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            to="/services"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore All 7 Engineering Services
          </Button>
        </div>
      </section>

      {/* 3. FEATURED WORK / DEMO PROJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Portfolio Highlights"
          title="Featured Solution"
          highlight="Demonstrations"
          description="Explore our concept implementations and technical demonstration projects highlighting our architectural standards and design craft."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            to="/portfolio"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            View Complete Project Gallery
          </Button>
        </div>
      </section>

      {/* 4. WHY CHOOSE NOVA@GEN TECHNOLOGIES */}
      <section className="bg-[#0B1020] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            light
            badge="Why Work With Us"
            title="A Dedicated Approach to"
            highlight="Software Excellence"
            description="We build software with a focus on code clarity, modern design patterns, and client-aligned collaboration."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900/60 rounded-2xl p-7 border border-slate-800/80 hover:border-indigo-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5 text-[#22D3EE]">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Modern Technology Stack</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We leverage industry-proven technologies including React, TypeScript, Tailwind CSS, Spring Boot, and MongoDB to build robust, future-proof platforms.
              </p>
            </div>

            <div className="bg-slate-900/60 rounded-2xl p-7 border border-slate-800/80 hover:border-indigo-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5 text-[#22D3EE]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Clean, Modular Architecture</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Codebases are structured cleanly with strict separation of concerns, reusable components, and comprehensive error handling for long-term maintainability.
              </p>
            </div>

            <div className="bg-slate-900/60 rounded-2xl p-7 border border-slate-800/80 hover:border-indigo-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5 text-[#22D3EE]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Direct & Transparent Collaboration</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Work directly with the software engineers building your solution. Enjoy clear milestones, proactive status communication, and transparent deliverables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR DEVELOPMENT PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Methodology"
          title="From Concept to"
          highlight="Working Software"
          description="A structured, iterative engineering process that ensures predictable timelines and dependable outcomes."
        />

        <ProcessTimeline />
      </section>

      {/* 6. FINAL PROJECT ENQUIRY CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0B1020] via-[#111827] to-[#161F37] border border-slate-800 p-8 sm:p-12 lg:p-16 text-center text-white overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#6366F1]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-[#22D3EE] border border-indigo-400/30 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Start Your Journey
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Have an Idea for a New Website or Custom Application?
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Let's connect to discuss your project requirements, technical architecture, and how Nova@Gen Technologies can help bring your digital vision to life.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                to="/contact"
                variant="secondary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Discuss Your Project
              </Button>
              <Button
                to="/about"
                variant="outline"
                size="lg"
                className="text-white border-slate-700 bg-slate-900/60 hover:bg-slate-800 hover:text-white"
              >
                Learn About Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
