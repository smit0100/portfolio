
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMongodb, SiExpress, SiPostgresql, SiRedis, SiGraphql, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

export const SKILLS = [
  {
    name: 'React',
    icon: FaReact,
    description: 'Building interactive user interfaces with modern React techniques and hooks.'
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    description: 'Creating performant server-side rendered and statically generated applications.'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    description: 'Developing type-safe applications with enhanced developer experience.'
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    description: 'Implementing complex client-side logic and functionality.'
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    description: 'Building scalable server-side applications and REST APIs.'
  },
  {
    name: 'Express',
    icon: SiExpress,
    description: 'Creating robust backend services and middleware systems.'
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    description: 'Working with NoSQL databases for flexible data storage solutions.'
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    description: 'Designing relational database schemas and writing efficient queries.'
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    description: 'Building responsive and customized user interfaces with utility classes.'
  },
  {
    name: 'GraphQL',
    icon: SiGraphql,
    description: 'Implementing efficient data fetching with typed schema definitions.'
  },
  {
    name: 'Redis',
    icon: SiRedis,
    description: 'Using in-memory data structures for caching and performance optimization.'
  },
  {
    name: 'Docker',
    icon: FaDocker,
    description: 'Containerizing applications for consistent development and deployment.'
  },
  {
    name: 'AWS',
    icon: FaAws,
    description: 'Deploying and managing cloud infrastructure and services.'
  },
  {
    name: 'Git/GitHub',
    icon: FaGithub,
    description: 'Version control and collaborative development workflows.'
  }
];

export const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment processing integration.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Stripe'],
    image: 'https://via.placeholder.com/600x340/1a1a2e/ffffff?text=E-Commerce+Platform',
    github: 'https://github.com/yourusername/ecommerce-platform',
    demo: 'https://ecommerce-demo.yourdomain.com'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, task assignment, progress tracking, and team collaboration features.',
    tags: ['React', 'Redux', 'Node.js', 'Socket.io', 'PostgreSQL'],
    image: 'https://via.placeholder.com/600x340/16213e/ffffff?text=Task+Management+App',
    github: 'https://github.com/yourusername/task-management',
    demo: 'https://taskapp-demo.yourdomain.com'
  },
  {
    title: 'Content Management System',
    description: 'A headless CMS with an intuitive dashboard for content creation, API content delivery, media management, and user role permissions.',
    tags: ['React', 'GraphQL', 'Node.js', 'MongoDB', 'AWS S3'],
    image: 'https://via.placeholder.com/600x340/0f3460/ffffff?text=Content+Management+System',
    github: 'https://github.com/yourusername/cms-platform',
    demo: 'https://cms-demo.yourdomain.com'
  },
  {
    title: 'Real-time Chat Application',
    description: 'A feature-rich chat platform with private messaging, group chats, file sharing, and read receipts built on a modern tech stack.',
    tags: ['Next.js', 'WebSockets', 'Express', 'MongoDB', 'Redis'],
    image: 'https://via.placeholder.com/600x340/533483/ffffff?text=Chat+Application',
    github: 'https://github.com/yourusername/chat-app',
    demo: 'https://chat-demo.yourdomain.com'
  },
  {
    title: 'Dashboard Analytics Tool',
    description: 'A comprehensive analytics dashboard with data visualization, customizable reports, and intelligent insights for business metrics.',
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Material UI'],
    image: 'https://via.placeholder.com/600x340/0f3460/ffffff?text=Analytics+Dashboard',
    github: 'https://github.com/yourusername/analytics-dashboard',
    demo: 'https://analytics-demo.yourdomain.com'
  },
  {
    title: 'Booking Management System',
    description: 'An appointment scheduling platform with calendar integration, automated reminders, and payment processing for service-based businesses.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    image: 'https://via.placeholder.com/600x340/1a1a2e/ffffff?text=Booking+System',
    github: 'https://github.com/yourusername/booking-system',
    demo: 'https://booking-demo.yourdomain.com'
  }
];

// Add your actual social media URLs here
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/smit-dankhra",
  twitter: "https://twitter.com/smitdankhra",
  github: "https://github.com/smitdankhra",
};

// Services section data
import { Code, Globe, Layers, Smartphone, Database, Server, PenTool, Repeat } from "lucide-react";

export const SERVICES = [
  {
    title: "Web Development",
    description: "Building responsive and modern web applications using the latest technologies.",
    icon: Globe
  },
  {
    title: "Mobile App Development",
    description: "Creating cross-platform mobile applications for iOS and Android.",
    icon: Smartphone
  },
  {
    title: "Frontend Development",
    description: "Crafting beautiful user interfaces with React, Next.js and Tailwind CSS.",
    icon: Layers
  },
  {
    title: "Backend Development",
    description: "Building robust server-side applications and APIs with Node.js and Express.",
    icon: Server
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and aesthetically pleasing user interfaces and experiences.",
    icon: PenTool
  },
  {
    title: "Database Design",
    description: "Architecting efficient and scalable database solutions for your applications.",
    icon: Database
  },
  {
    title: "API Development",
    description: "Creating secure and performant APIs to power your applications.",
    icon: Code
  },
  {
    title: "Maintenance & Support",
    description: "Providing ongoing maintenance and support for your existing applications.",
    icon: Repeat
  }
];

// Contact information
export const CONTACT_INFO = {
  email: "smitdankhra86@gmail.com",
  phone: "+91 88660 98942",
  location: "Surat, Gujarat, India",
  socials: {
    linkedin: "https://linkedin.com/in/smitdankhra",
    twitter: "https://twitter.com/smitdankhra",
    github: "https://github.com/smitdankhra"
  }
};
