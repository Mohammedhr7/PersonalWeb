
import React from 'react';
import Section from './Section';
import type { Project } from '../types';

const projectData: Project[] = [
  {
    title: 'AI Tumor Detection System',
    description: 'A web-based tool allowing users to upload medical images and receive predictions from a custom-trained AI model to identify potential tumors.',
    tags: ['Python', 'Machine Learning', 'Flask', 'Web UI']
  },
  {
    title: 'Agricultural Marketplace Platform',
    description: 'A full-stack web application designed for the agricultural sector, featuring a marketplace, stock management, and team collaboration tools.',
    tags: ['PHP', 'JavaScript', 'HTML/CSS', 'SQL']
  },
  {
    title: 'Smart Farming IoT System',
    description: 'An embedded system that leverages IoT sensors for real-time monitoring of farm conditions and uses predictive AI to optimize resource usage.',
    tags: ['Embedded C', 'IoT', 'AI', 'Sensors']
  },
  {
    title: 'Real-time Chat Application',
    description: 'A cross-platform mobile messaging app built with Flutter and Firebase, featuring real-time messaging, user authentication, and notifications.',
    tags: ['Flutter', 'Firebase', 'Mobile App']
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-light-navy p-6 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col">
    <div className="flex-grow">
      <h3 className="text-xl font-bold text-lightest-slate mb-3">{project.title}</h3>
      <p className="text-slate mb-4">{project.description}</p>
    </div>
    <div className="flex flex-wrap gap-2 font-mono text-sm text-light-slate">
      {project.tags.map(tag => (
        <span key={tag} className="bg-lightest-navy/50 px-2 py-1 rounded">{tag}</span>
      ))}
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <Section title="Things I've Built" id="projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
