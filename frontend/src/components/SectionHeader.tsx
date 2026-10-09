import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  highlight,
  description,
  align = 'center',
  className = '',
  light = false,
}) => {
  const isCentered = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCentered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
          light 
            ? 'bg-indigo-500/20 text-[#22D3EE] border border-indigo-400/30' 
            : 'bg-indigo-50 text-[#6366F1] border border-indigo-100'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-[#0B1020]'}`}>
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-[#6366F1] to-[#22D3EE] bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
