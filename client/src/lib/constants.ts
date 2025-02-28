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

// Add your actual social media URLs here
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/smit-dankhra",
  twitter: "https://twitter.com/smitdankhra",
  github: "https://github.com/smitdankhra",
};

// Services section data
import { Code, Globe, Layers, Smartphone, Database, Server, PenTool, Repeat } from "lucide-react";

// Projects data with specialized background images
export const PROJECTS = [
  {
    title: "Modern CMS Platform",
    description: "A content management system with intuitive UI, real-time editing, and media library management capabilities.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1470&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    demo: "https://cms-demo.example.com",
    github: "https://github.com/smitdankhra/cms-platform"
  },
  {
    title: "Real-time Chat Application",
    description: "End-to-end encrypted messaging platform with video calls, file sharing, and group chat functionality.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1374&auto=format&fit=crop",
    tags: ["WebSockets", "Socket.IO", "React", "Redux", "Firebase"],
    demo: "https://chat-app.example.com",
    github: "https://github.com/smitdankhra/chat-application"
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive data visualization tool with real-time metrics, customizable charts, and automated reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    tags: ["D3.js", "Chart.js", "Next.js", "TypeScript", "GraphQL"],
    demo: "https://analytics-dashboard.example.com",
    github: "https://github.com/smitdankhra/analytics-dashboard"
  },
  {
    title: "Booking Management System",
    description: "Comprehensive reservation platform for handling appointments, resources, and payment processing.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1470&auto=format&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe API", "Docker"],
    demo: "https://booking-system.example.com",
    github: "https://github.com/smitdankhra/booking-system"
  },
  {
    title: "E-commerce Solution",
    description: "Full-featured online store with inventory management, payment processing, and customer analytics.",
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=1470&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "Stripe", "Vercel"],
    demo: "https://ecommerce.example.com",
    github: "https://github.com/smitdankhra/ecommerce-platform"
  },
  {
    title: "Portfolio Builder",
    description: "Drag-and-drop website builder specifically designed for creative professionals to showcase their work.",
    image: "https://images.unsplash.com/photo-1546027658-7aa750153465?q=80&w=1470&auto=format&fit=crop",
    tags: ["React", "Firebase", "Framer Motion", "AWS S3"],
    demo: "https://portfolio-builder.example.com",
    github: "https://github.com/smitdankhra/portfolio-builder"
  }
];

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