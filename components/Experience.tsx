
import React from 'react';
import Section from './Section';
import type { TimelineItem } from '../types';

const experienceData: TimelineItem[] = [
  {
    date: '2025 (Planned)',
    title: 'Embedded System for Smart Farming',
    subtitle: 'IoT & AI Project',
    description: 'Developing an embedded system using IoT sensors for real-time environmental monitoring in agriculture, coupled with predictive AI for crop management.'
  },
  {
    date: 'Apr – Jun 2024',
    title: 'Web Application Developer',
    subtitle: 'Agricultural Sector Project',
    description: 'Contributed to a team building a marketplace platform with stock management features to digitalize business processes in the agricultural sector.'
  },
  {
    date: 'Feb – May 2024',
    title: 'AI for Medical Imaging',
    subtitle: 'Final-Year Project',
    description: 'Designed and implemented an AI model for tumor detection in medical images, including a simple user interface for image upload and prediction display.'
  },
  {
    date: 'Jul – Aug 2023',
    title: 'Mobile App Development Intern',
    subtitle: 'Flutter & Firebase',
    description: 'Developed chat and messaging mobile applications using Flutter for the frontend and Firebase for backend services, gaining hands-on experience in mobile development.'
  }
];

const Experience: React.FC = () => {
  return (
    <Section title="Where I've Worked" id="experience">
      <div className="relative border-l-2 border-lightest-navy/20 pl-8 space-y-12">
        {experienceData.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-10 w-4 h-4 bg-accent rounded-full border-4 border-navy"></div>
            <p className="text-accent font-mono text-sm mb-1">{item.date}</p>
            <h3 className="text-xl font-bold text-lightest-slate mb-1">{item.title}</h3>
            <p className="text-md font-semibold text-light-slate mb-2">{item.subtitle}</p>
            <p className="text-slate">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
