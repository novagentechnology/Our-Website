import React from 'react';
import { Search, PenTool, Code, Rocket, CheckCircle2 } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Requirement Analysis',
      description: 'We meet to understand your business objectives, target audience, functional specifications, and technical constraints.',
      icon: <Search className="w-5 h-5 text-[#0865F5]" />,
      highlights: ['Scope Definition', 'Technical Feasibility', 'Timeline & Milestones']
    },
    {
      step: '02',
      title: 'UI/UX Design & Architecture',
      description: 'We design intuitive wireframes, component systems, and plan the database schema and REST API structures.',
      icon: <PenTool className="w-5 h-5 text-[#0865F5]" />,
      highlights: ['Interactive Wireframes', 'Database Modeling', 'API Contract Design']
    },
    {
      step: '03',
      title: 'Iterative Full-Stack Development',
      description: 'Clean coding following modern best practices, responsive styling, unit tests, and regular milestone demonstrations.',
      icon: <Code className="w-5 h-5 text-[#0865F5]" />,
      highlights: ['Component-Driven UI', 'Spring Boot Backend', 'MongoDB Persistence']
    },
    {
      step: '04',
      title: 'Testing, Deployment & Handoff',
      description: 'Rigorous cross-browser testing, accessibility verification, secure cloud deployment, and comprehensive documentation.',
      icon: <Rocket className="w-5 h-5 text-[#0865F5]" />,
      highlights: ['Quality Assurance', 'Cloud Deployment', 'Documentation & Handoff']
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((item, index) => (
        <div
          key={index}
          className="relative bg-white rounded-[6px] p-6 border border-[#EBEEF4] shadow-[0_8px_30px_rgba(20,35,65,0.055)] hover:shadow-[0_14px_35px_rgba(20,35,65,0.09)] hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-full bg-[#F3F6FD] border border-blue-100 flex items-center justify-center group-hover:bg-[#0865F5] group-hover:text-white transition-colors duration-200">
                {item.icon}
              </div>
              <span className="text-2xl font-extrabold text-slate-300 group-hover:text-[#0865F5] transition-colors">
                {item.step}
              </span>
            </div>

            <h3 className="text-base font-bold text-[#171B26] mb-2 group-hover:text-[#0865F5] transition-colors">
              {item.title}
            </h3>

            <p className="text-xs text-[#777B86] leading-relaxed mb-4">
              {item.description}
            </p>
          </div>

          <div className="space-y-1.5 pt-4 border-t border-[#EBEEF4]">
            {item.highlights.map((highlight, hIdx) => (
              <div key={hIdx} className="flex items-center gap-1.5 text-xs text-[#777B86]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0865F5] flex-shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
