import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  align = 'center',
  light = false 
}) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const titleColor = light ? 'text-white' : 'text-mw-dark';
  const subtitleColor = light ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className={`mb-12 ${alignClass}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <div className={`h-1 w-20 bg-mw-orange rounded mb-4 ${align === 'center' ? 'mx-auto' : ''}`}></div>
      )}
      {subtitle && (
        <p className={`text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};