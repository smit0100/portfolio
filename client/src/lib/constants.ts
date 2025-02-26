import { SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiTypescript, SiPython, SiFirebase, SiGit, SiNextdotjs, SiRust, SiDocker } from "react-icons/si";
import { Code2, Database, Globe, Laptop, Share2, Wrench, Bot } from "lucide-react";

export const SKILLS = [
  {
    name: "React.js",
    icon: SiReact,
    description: "Frontend development with React and its ecosystem",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    description: "Server-side rendering and full-stack React applications",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    description: "Backend development with Express and Node.js",
  },
  {
    name: "Rust",
    icon: SiRust,
    description: "Systems programming and high-performance applications",
  },
  {
    name: "Docker",
    icon: SiDocker,
    description: "Containerization and deployment automation",
  },
  {
    name: "JavaScript/TypeScript",
    icon: SiJavascript,
    description: "Modern JavaScript and TypeScript development",
  },
  {
    name: "Python",
    icon: SiPython,
    description: "Python programming and automation",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    description: "Database design and management",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    description: "Cloud services and real-time applications",
  },
  {
    name: "Git & Version Control",
    icon: SiGit,
    description: "Source code management and collaboration",
  }
];

export const PROJECTS = [
  {
    title: "Educational Platform",
    description: "Developed a comprehensive learning management system using React and Node.js",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    demo: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "E-commerce Solution",
    description: "Built a full-featured online store with payment integration",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    demo: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "Created a real-time task management application with Firebase",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    demo: "https://example.com",
    github: "https://github.com",
  }
];

export const SERVICES = [
  {
    title: "Next.js Development",
    icon: Globe,
    description: "Building high-performance applications with Next.js",
  },
  {
    title: "Web Scraping Solutions",
    icon: Bot,
    description: "Automated data extraction and web scraping services",
  },
  {
    title: "SaaS Platform Development",
    icon: Code2,
    description: "Building scalable SaaS applications with modern technologies",
  },
  {
    title: "Backend Development",
    icon: Database,
    description: "Building robust server-side applications and APIs",
  },
  {
    title: "Technical Consulting",
    icon: Wrench,
    description: "Providing technical guidance and solutions architecture",
  },
  {
    title: "Custom Development",
    icon: Laptop,
    description: "Tailored development solutions for specific needs",
  },
];