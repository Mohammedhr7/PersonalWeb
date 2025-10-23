
import React from 'react';

export interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

export interface Skill {
  name: string;
  icon: React.ElementType;
}

export interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}
