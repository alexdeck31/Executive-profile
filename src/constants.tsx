import { Globe, TrendingUp, Users, Cpu, Briefcase, Bot } from 'lucide-react';
import { Experience, Education, Video, Skill, ValueCardItem, Testimonial } from './types';
import { TranslationKey } from './i18n/translations';

// Updated with the new profile photo
export const PROFILE_PHOTO_URL = "/profile-photo.jpg"; 

export const CV_DESIGN_URL = "/CV_Alexandre_Durand_ATS_DESIGN_05_2026.pdf";
export const CV_PRINTABLE_URL = "/Alexandre_Durand_Dynamic_ATS_CV.pdf";
export const LINKEDIN_URL = "https://www.linkedin.com/in/durandalexandre/";

// Email Obfuscation to prevent scraping
const EMAIL_USER = "pro.alexandre.durand";
const EMAIL_DOMAIN = "gmail.com";
export const getEmail = () => `${EMAIL_USER}@${EMAIL_DOMAIN}`;

// --- PHOTOGRAPHY SECTION ---
export const PHOTOGRAPHY_IMAGES = [
  "/Photography passion 1.jpg",
  "/Photography passion 2.jpg",
  "/Photography passion 3.jpg",
  "/Photography passion 4.jpg",
  "/Photography passion 5.jpg",
  "/Photography passion 6.jpg",
  "/Photography passion 7.jpg",
  "/Photography passion 8.jpg",
  "/Photography passion 9.jpg",
  "/Photography passion 10.jpeg"
];

export const getExperiences = (t: (key: TranslationKey) => string): Experience[] => [
  {
    id: 'exp1',
    role: t('constants.exp1Role'),
    company: t('constants.exp1Company'),
    period: t('constants.exp1Period'),
    location: t('constants.exp1Location'),
    description: t('constants.exp1Desc'),
    achievements: [
      t('constants.exp1Ach1'),
      t('constants.exp1Ach2'),
      t('constants.exp1Ach3'),
      t('constants.exp1Ach4')
    ]
  },
  {
    id: 'exp2',
    role: t('constants.exp2Role'),
    company: t('constants.exp2Company'),
    period: t('constants.exp2Period'),
    location: t('constants.exp2Location'),
    description: t('constants.exp2Desc'),
    achievements: [
      t('constants.exp2Ach1'),
      t('constants.exp2Ach2'),
      t('constants.exp2Ach3')
    ]
  },
  {
    id: 'exp3',
    role: t('constants.exp3Role'),
    company: t('constants.exp3Company'),
    period: t('constants.exp3Period'),
    location: t('constants.exp3Location'),
    description: t('constants.exp3Desc'),
    achievements: [
      t('constants.exp3Ach1'),
      t('constants.exp3Ach2'),
      t('constants.exp3Ach3')
    ]
  },
  {
    id: 'exp4',
    role: t('constants.exp4Role'),
    company: t('constants.exp4Company'),
    period: t('constants.exp4Period'),
    location: t('constants.exp4Location'),
    description: t('constants.exp4Desc'),
    achievements: [
      t('constants.exp4Ach1'),
      t('constants.exp4Ach2')
    ]
  }
];

export const getEducation = (t: (key: TranslationKey) => string): Education[] => [
  {
    id: 'edu1',
    degree: t('constants.edu1Degree'),
    institution: t('constants.edu1Inst'),
    year: t('constants.edu1Year'),
    logo: "/Logo_essec2.png"
  },
  {
    id: 'edu2',
    degree: t('constants.edu2Degree'),
    institution: t('constants.edu2Inst'),
    year: t('constants.edu2Year'),
    logo: "/LUIC logo.jpg"
  },
  {
    id: 'edu3',
    degree: t('constants.edu3Degree'),
    institution: t('constants.edu3Inst'),
    year: t('constants.edu3Year'),
    logo: "/tbs-logo.webp"
  },
  {
    id: 'edu4',
    degree: t('constants.edu4Degree'),
    institution: t('constants.edu4Inst'),
    year: t('constants.edu4Year'),
    logo: "/paul-sabatier-university.jpg"
  }
];

export const getValueCards = (t: (key: TranslationKey) => string): ValueCardItem[] => [
  {
    id: 'vc1',
    title: t('constants.vc1Title'),
    icon: <Globe size={24} />,
    description: t('constants.vc1Desc'),
    details: [
      t('constants.vc1Det1'),
      t('constants.vc1Det2'),
      t('constants.vc1Det3')
    ]
  },
  {
    id: 'vc2',
    title: t('constants.vc2Title'),
    icon: <TrendingUp size={24} />,
    description: t('constants.vc2Desc'),
    details: [
      t('constants.vc2Det1'),
      t('constants.vc2Det2'),
      t('constants.vc2Det3')
    ]
  },
  {
    id: 'vc3',
    title: t('constants.vc3Title'),
    icon: <Users size={24} />,
    description: t('constants.vc3Desc'),
    details: [
      t('constants.vc3Det1'),
      t('constants.vc3Det2'),
      t('constants.vc3Det3')
    ]
  },
  {
    id: 'vc4',
    title: t('constants.vc4Title'),
    icon: <Cpu size={24} />,
    description: t('constants.vc4Desc'),
    details: [
      t('constants.vc4Det1'),
      t('constants.vc4Det2'),
      t('constants.vc4Det3')
    ]
  },
  {
    id: 'vc5',
    title: t('constants.vc5Title'),
    icon: <Briefcase size={24} />,
    description: t('constants.vc5Desc'),
    details: [
      t('constants.vc5Det1'),
      t('constants.vc5Det2'),
      t('constants.vc5Det3')
    ]
  },
  {
    id: 'vc6',
    title: t('constants.vc6Title'),
    icon: <Bot size={24} />,
    description: t('constants.vc6Desc'),
    details: [
      t('constants.vc6Det1'),
      t('constants.vc6Det2'),
      t('constants.vc6Det3')
    ]
  }
];

export const getSkills = (t: (key: TranslationKey) => string): Skill[] => [
  { name: t('constants.skillIntSales'), level: 98, category: 'core' },
  { name: t('constants.skillBizDev'), level: 95, category: 'core' },
  { name: t('constants.skillTeamLead'), level: 92, category: 'core' },
  { name: t('constants.skillBizPlan'), level: 80, category: 'core' },
  { name: t('constants.skillMarketing'), level: 75, category: 'core' },
  { name: t('constants.skillGTM'), level: 94, category: 'core' },
  
  { name: t('constants.skillLangFR'), level: 100, category: 'language' },
  { name: t('constants.skillLangEN'), level: 95, category: 'language' },
  { name: t('constants.skillLangIT'), level: 95, category: 'language' },
  { name: t('constants.skillLangES'), level: 40, category: 'language' },
];

export const getVideos = (t: (key: TranslationKey) => string): Video[] => [
  {
    id: 'vid1',
    title: t('constants.vid1Title'),
    description: t('constants.vid1Desc'),
    thumbnail: 'https://img.youtube.com/vi/WEwj5DoAC9M/maxresdefault.jpg',
    youtubeId: 'WEwj5DoAC9M'
  },
  {
    id: 'vid2',
    title: t('constants.vid2Title'),
    description: t('constants.vid2Desc'),
    thumbnail: 'https://img.youtube.com/vi/VuyMXY1m79I/maxresdefault.jpg',
    youtubeId: 'VuyMXY1m79I'
  }
];

export const getTestimonials = (t: (key: TranslationKey) => string): Testimonial[] => [
  {
    id: 't1',
    name: 'Jean-Marc Lazzari',
    role: t('constants.test1Role'),
    company: 'Instant System',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', 
    content: t('constants.test1Content')
  },
  {
    id: 't2',
    name: 'Guillaume R.',
    role: t('constants.test2Role'),
    company: 'ECA Group',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    content: t('constants.test2Content')
  },
  {
    id: 't3',
    name: 'Marco B.',
    role: t('constants.test3Role'),
    company: 'Groupe Delta Dore',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    content: t('constants.test3Content')
  }
];
