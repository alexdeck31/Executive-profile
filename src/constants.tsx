import React from 'react';
import { Globe, TrendingUp, Users, Cpu, Briefcase, Bot } from 'lucide-react';
import { Experience, Education, Video, Skill, ValueCardItem, Testimonial } from './types';

// Updated with the new profile photo
export const PROFILE_PHOTO_URL = "https://lh3.googleusercontent.com/d/16y0uO-vLfNKpZgG1D7mKLihaGZ29JWtN"; 

export const CV_LINK = "https://drive.google.com/file/d/1A3hftXGzDdbRfDXMYz2ZQeECGEtg0Ysx/view?usp=drive_link";
export const LINKEDIN_URL = "https://www.linkedin.com/in/durandalexandre/";

// Email Obfuscation to prevent scraping
const EMAIL_USER = "pro.alexandre.durand";
const EMAIL_DOMAIN = "gmail.com";
export const getEmail = () => `${EMAIL_USER}@${EMAIL_DOMAIN}`;

// --- PHOTOGRAPHY SECTION ---
export const PHOTOGRAPHY_IMAGES = [
  "https://lh3.googleusercontent.com/d/1XlwosfS5e-8Kgsk3HodlIdLt2vKvri85",
  "https://lh3.googleusercontent.com/d/1XPnIC1LnbPtXeZrwrv4XDf6_moZiZmxg",
  "https://lh3.googleusercontent.com/d/17oGwkXSx2yzLy93WZAVz42-56Pze8Ug7",
  "https://lh3.googleusercontent.com/d/1_i2ONnbFqIDaN-pxYH0XkY4bw9YaC2hu",
  "https://lh3.googleusercontent.com/d/1pn8tWUWxQweuIk9YjISZbFwg-BcEA8fz",
  "https://lh3.googleusercontent.com/d/1IQprHsRRkLYUUAc0yFjDb8JXx5kn7sfT",
  "https://lh3.googleusercontent.com/d/1_wiBiQrXNs3sweJ7zv5Y3nUWsHvEZtdj",
  "https://lh3.googleusercontent.com/d/1GKDE8ZSTcpGEZujRpwzyKR_cJtLCHO8m",
  "https://lh3.googleusercontent.com/d/1lC0zeMW4gq345lQiJR8PERbtdd-G57zk",
  "https://lh3.googleusercontent.com/d/1KvGy_v1hRaZoHUqR1qZJedpQnHrbFdhV"
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: 'Head of International Sales',
    company: 'Instant System',
    period: 'April 2022 – Dec 2025',
    location: 'Paris, France',
    description: 'Leading international expansion for Mobility as a Service (MaaS) solutions.',
    achievements: [
      'Expanded international footprint from 0 to 8 countries.',
      'Built a 30M+€ ARR pipeline from scratch.',
      'Full ownership of sales cycle and GTM strategy.',
      'Managed sales team and MaaS SaaS expansion.'
    ]
  },
  {
    id: 'exp2',
    role: 'International Business Development Manager',
    company: 'ECA Group (now Exail)',
    period: 'Feb 2019 – April 2022',
    location: 'Toulon, France',
    description: 'Spearheaded the creation of a new industrial line derived from defense technology.',
    achievements: [
      'Managed hybrid B2G and B2B sales cycles (50–300K€ deal size).',
      'Opened markets in Americas, Western Europe, Israel, and UAE.',
      'Navigated long, complex sales cycles in high-stakes environments.'
    ]
  },
  {
    id: 'exp3',
    role: 'Managing Director Italy',
    company: 'Groupe Delta Dore',
    period: 'Jan 2013 – Dec 2018',
    location: 'Milan, Italy',
    description: 'Led the Italian subsidiary to become the fastest-growing unit in the group.',
    achievements: [
      'Managed P&L, budget planning, and strategic direction.',
      'Led a team of 6 direct employees and 6 sales reps.',
      'Achieved consistent double-digit growth year over year.'
    ]
  },
  {
    id: 'exp4',
    role: 'VIE Business Development Italy',
    company: 'Groupe Delta Dore',
    period: 'Jan 2011 – Dec 2012',
    location: 'Turin, Italy',
    description: 'Launched the Italian subsidiary startup operations.',
    achievements: [
      'Created distribution network from the ground up.',
      'Managed local marketing and communication strategies.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'edu1',
    degree: 'Management & Leadership',
    institution: 'ESSEC Business School',
    year: '2017',
    logo: "https://yourdreamschool.fr/wp-content/uploads/2024/09/Logo_essec2.svg-1.jpg"
  },
  {
    id: 'edu2',
    degree: 'Erasmus Exchange',
    institution: 'Università Carlo Cattaneo',
    year: '2010–2011',
    logo: "https://liceoclassicomanzoni.edu.it/wp-content/uploads/2025/01/cropped-Logo-LIUC-Istituzionale_Logo-LIUC-youtube.png"
  },
  {
    id: 'edu3',
    degree: 'Business Master’s Degree',
    institution: 'Toulouse Business School',
    year: '2009–2011',
    logo: "https://www.tbs-education.fr/content/uploads/sites/4/cache/2025/07/logo-tbs-education-rvb-rond-2024/1540885503.png"
  },
  {
    id: 'edu4',
    degree: 'Engineering Master’s Degree',
    institution: 'IUP Toulouse Paul Sabatier',
    year: '2008–2009',
    logo: "https://pbs.twimg.com/profile_images/1263024485130809344/Ciq4F1y1_400x400.jpg"
  }
];

export const VALUE_CARDS: ValueCardItem[] = [
  {
    id: 'vc1',
    title: 'International Business Development',
    icon: <Globe size={24} />,
    description: 'Expanding market reach across borders with culturally adapted strategies.',
    details: [
      'Opened 8+ new country markets',
      'Cross-border negotiation expert',
      'Local subsidiary setup & management'
    ]
  },
  {
    id: 'vc2',
    title: 'Revenue Growth & ARR Expansion',
    icon: <TrendingUp size={24} />,
    description: 'Driving sustainable revenue streams through scalable SaaS models.',
    details: [
      'Built 30M+€ pipeline from scratch',
      'Double-digit YoY growth track record',
      'SaaS pricing strategy optimization'
    ]
  },
  {
    id: 'vc3',
    title: 'Strategic Partnerships',
    icon: <Users size={24} />,
    description: 'Forging high-value alliances with public and private stakeholders.',
    details: [
      'B2G & Public Tender expertise',
      'C-Level relationship building',
      'Ecosystem development'
    ]
  },
  {
    id: 'vc4',
    title: 'SaaS & Mobility Platforms',
    icon: <Cpu size={24} />,
    description: 'Deep technical understanding of complex software ecosystems.',
    details: [
      'MaaS (Mobility as a Service) expert',
      'Smart City & IoT integration',
      'Product-market fit alignment'
    ]
  },
  {
    id: 'vc5',
    title: 'Team Leadership & P&L',
    icon: <Briefcase size={24} />,
    description: 'Empowering cross-functional teams to achieve peak performance.',
    details: [
      'Managed P&L for international units',
      'Recruited & trained sales teams',
      'Cross-cultural management'
    ]
  },
  {
    id: 'vc6',
    title: 'Agentic AI & Automation',
    icon: <Bot size={24} />,
    description: 'Leveraging AI agents to automate complex workflows and drive operational efficiency.',
    details: [
      'Certified N8N Expert',
      'Sales Operation Automation',
      'Custom Agent Development'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'International Sales', level: 98, category: 'core' },
  { name: 'Business Development', level: 95, category: 'core' },
  { name: 'Team Leadership', level: 92, category: 'core' },
  { name: 'Business Planning', level: 80, category: 'core' },
  { name: 'Marketing', level: 75, category: 'core' },
  { name: 'Go-to-Market', level: 94, category: 'core' },
  
  { name: 'French (Native)', level: 100, category: 'language' },
  { name: 'English (Fluent)', level: 95, category: 'language' },
  { name: 'Italian (Fluent)', level: 95, category: 'language' },
  { name: 'Spanish (Intermediate)', level: 40, category: 'language' },
];

export const VIDEOS: Video[] = [
  {
    id: 'vid1',
    title: 'Keynote on Smart Mobility',
    description: 'Discussing the future of MaaS and urban transportation.',
    thumbnail: 'https://img.youtube.com/vi/WEwj5DoAC9M/maxresdefault.jpg',
    youtubeId: 'WEwj5DoAC9M'
  },
  {
    id: 'vid2',
    title: 'Tech & Sustainability',
    description: 'How technology drives sustainable city development.',
    thumbnail: 'https://img.youtube.com/vi/VuyMXY1m79I/maxresdefault.jpg',
    youtubeId: 'VuyMXY1m79I'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Jean-Marc Lazzari',
    role: 'CEO',
    company: 'Instant System',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
    content: 'Alexandre is a driven sales leader who understands how to build international bridges. His ability to navigate complex public tenders and build long-term relationships is a true asset.'
  },
  {
    id: 't2',
    name: 'Guillaume R.',
    role: 'Aerospace Director',
    company: 'ECA Group',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    content: 'An exceptional business developer who opened entirely new markets for our defense sector. Alexandre combines technical knowledge with strong negotiation skills.'
  },
  {
    id: 't3',
    name: 'Marco B.',
    role: 'Regional Manager',
    company: 'Groupe Delta Dore',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    content: 'His leadership in opening the Italian market was exemplary. He built the subsidiary from the ground up and achieved consistent double-digit growth.'
  }
];
