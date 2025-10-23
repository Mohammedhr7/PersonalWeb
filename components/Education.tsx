
import React from 'react';
import Section from './Section';
import type { TimelineItem } from '../types';

const educationData: TimelineItem[] = [
  {
    date: '2025 – 2027',
    title: 'Master: Computer Engineering & Embedded Systems',
    subtitle: 'Faculty of Sciences, Agadir',
    description: ''
  },
  {
    date: '2024 – 2025',
    title: 'Bachelor: Computer Engineering & Embedded Systems',
    subtitle: 'Faculty of Sciences, Agadir',
    description: ''
  },
  {
    date: '2022 – 2024',
    title: 'DUT: Network Administration',
    subtitle: 'Ecole Supérieure de Technologie, Safi',
    description: ''
  },
  {
    date: '2020 – 2021',
    title: 'Baccalaureate: Physical Sciences',
    subtitle: 'Lycee Homan Fatwaki',
    description: 'Graduated with honors ("mention bien").'
  }
];

const Education: React.FC = () => {
  return (
    <Section title="Education" id="education">
      <div className="relative border-l-2 border-lightest-navy/20 pl-8 space-y-12">
        {educationData.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-10 w-4 h-4 bg-accent rounded-full border-4 border-navy"></div>
            <p className="text-accent font-mono text-sm mb-1">{item.date}</p>
            <h3 className="text-xl font-bold text-lightest-slate mb-1">{item.title}</h3>
            <p className="text-md font-semibold text-light-slate mb-2">{item.subtitle}</p>
            {item.description && <p className="text-slate">{item.description}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
