
import React from 'react';
import type { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ title, id, children }) => {
  return (
    <section id={id} className="py-20 animate-fade-in-up" style={{ animationDelay: '300ms', opacity: 0 }}>
      <h2 className="text-3xl font-bold text-lightest-slate mb-8 flex items-center">
        <span className="text-accent mr-3 text-2xl font-mono">#</span>
        {title}
        <span className="flex-grow h-px bg-lightest-navy ml-4"></span>
      </h2>
      {children}
    </section>
  );
};

export default Section;
