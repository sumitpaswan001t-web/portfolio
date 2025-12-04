import { Code2, PenTool, Rocket, Search } from 'lucide-react';
import { Project, Skill, ProcessStep, Testimonial } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    category: "Web",
    description: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization.",
    tags: ["React", "Tailwind", "Recharts", "Node.js"],
    image: "https://picsum.photos/800/600?random=1",
    link: "#"
  },
  {
    id: 2,
    title: "Finance Tracker App",
    category: "Mobile",
    description: "Personal finance management application with expense tracking and budget forecasting.",
    tags: ["React Native", "Firebase", "TypeScript"],
    image: "https://picsum.photos/800/600?random=2",
    link: "#"
  },
  {
    id: 3,
    title: "AI Image Generator",
    category: "Web",
    description: "Interface for generating art using generative AI models with custom parameter controls.",
    tags: ["Next.js", "Gemini API", "Three.js"],
    image: "https://picsum.photos/800/600?random=3",
    link: "#"
  },
  {
    id: 4,
    title: "Travel Agency Brand",
    category: "UI/UX",
    description: "Complete brand identity and web design for a luxury travel agency.",
    tags: ["Figma", "Branding", "UI Design"],
    image: "https://picsum.photos/800/600?random=4",
    link: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95, category: 'frontend' },
  { name: "TypeScript", level: 90, category: 'frontend' },
  { name: "Tailwind CSS", level: 95, category: 'frontend' },
  { name: "Node.js", level: 85, category: 'backend' },
  { name: "PostgreSQL", level: 80, category: 'backend' },
  { name: "Figma", level: 85, category: 'design' },
];

export const PROCESS: ProcessStep[] = [
  {
    id: 1,
    title: "Discover",
    description: "We start by understanding your goals, user needs, and competitive landscape.",
    icon: Search
  },
  {
    id: 2,
    title: "Design",
    description: "I craft wireframes and high-fidelity mockups to visualize the solution.",
    icon: PenTool
  },
  {
    id: 3,
    title: "Develop",
    description: "Writing clean, scalable code to bring the designs to life.",
    icon: Code2
  },
  {
    id: 4,
    title: "Launch",
    description: "Deployment, testing, and ensuring everything runs smoothly.",
    icon: Rocket
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CTO @ TechFlow",
    quote: "The attention to detail and animations transformed our platform. Truly world-class work.",
    avatar: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager @ StartUp",
    quote: "Delivered ahead of schedule and the code quality was exceptional. Highly recommended.",
    avatar: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Founder @ ArtSpace",
    quote: "He captured our brand essence perfectly. The site feels alive.",
    avatar: "https://picsum.photos/100/100?random=12"
  }
];
