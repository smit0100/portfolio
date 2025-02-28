import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/smit-dankhra-768736205/",
      color: "#0077B5",
      hoverColor: "#0A66C2",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/DankhraSmi90870",
      color: "#1DA1F2",
      hoverColor: "#0C99E6",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/smit0100",
      color: "#333",
      hoverColor: "#24292F",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="flex justify-center items-center gap-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          variants={item}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute -inset-1.5 rounded-full opacity-70 blur-sm transition-all duration-300 group-hover:opacity-100"
            style={{ backgroundColor: social.color }}
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 0.8 }}
          />
          <motion.div
            className="relative flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/20 bg-black/30 backdrop-blur-md text-white"
            whileHover={{
              backgroundColor: social.hoverColor,
              borderColor: "rgba(255, 255, 255, 0.5)",
              transition: { duration: 0.2 },
            }}
          >
            <social.icon className="w-5 h-5" />
          </motion.div>
          <motion.span
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap"
            initial={{ opacity: 0, y: -5 }}
            whileHover={{ opacity: 1, y: 0 }}
          >
            {social.name}
          </motion.span>
        </motion.a>
      ))}
    </motion.div>
  );
}
