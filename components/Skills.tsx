
import React from 'react';
import Section from './Section';
import type { Skill } from '../types';
import { CIcon, PythonIcon, JavaIcon, FlutterIcon, WebIcon, AssemblyIcon, SqlIcon, LinuxIcon, SecurityIcon, NetworkIcon } from './icons';

const skills: { category: string, items: Skill[] }[] = [
  {
    category: "Cybersecurity & Networks",
    items: [
      { name: 'Offensive Security', icon: SecurityIcon },
      { name: 'Network Fundamentals', icon: NetworkIcon },
      { name: 'Linux Admin Basics', icon: LinuxIcon },
    ]
  },
  {
    category: "Programming",
    items: [
      { name: 'C', icon: CIcon },
      { name: 'Assembly', icon: AssemblyIcon },
      { name: 'Java', icon: JavaIcon },
      { name: 'Python', icon: PythonIcon },
    ]
  },
  {
    category: "Web & Mobile",
    items: [
      { name: 'Flutter', icon: FlutterIcon },
      { name: 'HTML/CSS/JS', icon: WebIcon },
      { name: 'PHP', icon: WebIcon },
      { name: 'SQL & PL/pgSQL', icon: SqlIcon },
    ]
  },
];

const Skills: React.FC = () => {
  return (
    <Section title="My Skills" id="skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map(skillCategory => (
          <div key={skillCategory.category} className="bg-light-navy p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-lightest-slate mb-4">{skillCategory.category}</h3>
            <ul className="space-y-3">
              {skillCategory.items.map(skill => (
                <li key={skill.name} className="flex items-center text-slate">
                  <skill.icon className="w-6 h-6 mr-3 text-accent" />
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
