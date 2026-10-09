import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  LayoutGrid, 
  Code2, 
  Palette, 
  Network, 
  Database, 
  Cpu, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import type { ServiceItem } from '../types/service';

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-[#6366F1] group-hover:text-[#22D3EE] transition-colors" };
    switch (iconName) {
      case 'Globe': return <Globe {...props} />;
      case 'LayoutGrid': return <LayoutGrid {...props} />;
      case 'Code2': return <Code2 {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Network': return <Network {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      default: return <Code2 {...props} />;
    }
  };

  return (
    <div
      id={service.id}
      className={`group relative bg-white rounded-2xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between hover:shadow-card hover:-translate-y-1 ${
        featured
          ? 'border-indigo-200 ring-1 ring-indigo-500/20 shadow-subtle'
          : 'border-slate-200/80 shadow-subtle hover:border-indigo-200'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center group-hover:bg-[#0B1020] transition-colors duration-300">
            {getIcon(service.icon)}
          </div>
          {service.badge && (
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-[#6366F1] border border-indigo-100 uppercase tracking-wider">
              {service.badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-[#0B1020] mb-2.5 group-hover:text-[#6366F1] transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {service.shortDescription}
        </p>

        {/* Problem Solved Highlight */}
        <div className="mb-5 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-600">
          <span className="font-semibold text-slate-800">Problem Addressed: </span>
          {service.problemSolved}
        </div>

        {/* Deliverables List */}
        <div className="mb-6 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Key Deliverables
          </div>
          <ul className="space-y-1.5">
            {service.keyDeliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3EE] mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 mb-5">
          {service.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={`/contact?service=${encodeURIComponent(service.title)}`}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-slate-100 text-[#0B1020] hover:bg-[#0B1020] hover:text-white transition-all duration-200"
        >
          Discuss This Service <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
