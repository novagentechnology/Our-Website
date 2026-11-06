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
    const props = { className: "w-6 h-6 text-[#0865F5] group-hover:text-white transition-colors" };
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
      className={`group relative bg-white rounded-lg p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between hover:shadow-[0_12px_35px_rgba(20,35,65,0.08)] hover:-translate-y-1 ${
        featured
          ? 'border-blue-200 ring-1 ring-blue-500/20 shadow-[0_8px_30px_rgba(20,35,65,0.055)]'
          : 'border-[#EBEEF4] shadow-[0_8px_30px_rgba(20,35,65,0.055)] hover:border-blue-200'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-full bg-[#F3F6FD] border border-blue-50 flex items-center justify-center group-hover:bg-[#0865F5] transition-colors duration-300">
            {getIcon(service.icon)}
          </div>
          {service.badge && (
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-sm bg-[#F3F6FD] text-[#0865F5] border border-blue-100 uppercase tracking-wider">
              {service.badge}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-[#171B26] mb-2 group-hover:text-[#0865F5] transition-colors">
          {service.title}
        </h3>

        <p className="text-xs sm:text-sm text-[#777B86] leading-relaxed mb-4">
          {service.shortDescription}
        </p>

        {/* Problem Solved Highlight */}
        <div className="mb-5 p-3 rounded bg-[#F8FAFC] border border-[#EBEEF4] text-xs text-[#777B86]">
          <span className="font-semibold text-[#171B26]">Problem Addressed: </span>
          {service.problemSolved}
        </div>

        {/* Deliverables list */}
        <div className="space-y-1.5 mb-6">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#171B26]">
            Key Capabilities
          </div>
          {service.keyDeliverables.slice(0, 3).map((item: string, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-[#777B86]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0865F5] flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-[#EBEEF4] flex items-center justify-between mt-auto">
        <Link
          to={`/contact?service=${encodeURIComponent(service.id)}`}
          className="text-xs font-semibold text-[#0865F5] hover:text-[#0052D6] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform uppercase tracking-wider"
        >
          <span>Request Consultation</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <span className="text-[11px] text-slate-400 font-mono">
          {service.technologies.slice(0, 2).join(', ')}
        </span>
      </div>
    </div>
  );
};
