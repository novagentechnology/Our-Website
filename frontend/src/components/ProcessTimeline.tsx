import React from 'react';
import { Search, PenTool, Code, Rocket, CheckCircle2 } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Requirement Analysis',
      description: 'We meet to understand your business objectives, target audience, functional specifications, and technical constraints.',
      icon: <Search className="w-5 h-5 text-[#22D3EE]" />,
      highlights: ['Scope Definition', 'Technical Feasibility', 'Timeline & Milestones']
    },
    {
      step: '02',
      title: 'UI/UX Design & Architecture',
      description: 'We design intuitive wireframes, component systems, and plan the database schema and REST API structures.',
      icon: <PenTool className="w-5 h-5 text-[#22D3EE]" />,
      highlights: ['Interactive Wireframes', 'Database Modeling', 'API Contract Design']
    },
    {
      step: '03',
      title: 'Iterative Full-Stack Development',
      description: 'Clean coding following modern best practices, responsive styling, unit tests, and regular milestone demonstrations.',
      icon: <Code className="w-5 h-5 text-[#22D3EE]" />,
      highlights: ['Component-Driven UI', 'Spring Boot Backend', 'MongoDB Persistence']
    },
    {
      step: '04',
      title: 'Testing, Deployment & Handoff',
      description: 'Rigorous cross-browser testing, accessibility verification, secure cloud deployment, and comprehensive documentation.',
      icon: <Rocket className="w-5 h-5 text-[#22D3EE]" />,
      highlights: ['Quality Assurance', 'Cloud Deployment', 'Documentation & Handoff']
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((item, index) => (
        <div
          key={index}
          className="relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-subtle hover:shadow-card hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0B1020] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                {item.icon}
              </div>
              <span className="text-2xl font-extrabold text-slate-200 group-hover:text-indigo-100 transition-colors">
                {item.step}
              </span>
            </div>

            <h3 className="text-lg font-bold text-[#0B1020] mb-2 group-hover:text-[#6366F1] transition-colors">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              {item.description}
            </p>
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-1.5">
            {item.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#6366F1] flex-shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
