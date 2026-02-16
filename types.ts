import React from 'react';

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  location?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  description?: string;
  logo?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100 for visual bar
  category: 'core' | 'language' | 'tech';
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  youtubeId: string;
}

export interface ValueCardItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}