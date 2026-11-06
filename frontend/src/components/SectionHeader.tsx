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
        <span className={`inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3 ${
          light 
            ? 'text-[#0865F5]' 
            : 'text-[#0865F5]'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-[#171B26]'}`}>
        {title}{' '}
        {highlight && (
          <span className="text-[#0865F5]">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className={`mt-3 text-sm sm:text-base leading-relaxed ${light ? 'text-slate-300' : 'text-[#777B86]'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
