import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  // Create animated stars
  const stars = Array.from({ length: 10 }).map((_, i) => i);

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background via-background/95 to-muted/30 relative overflow-hidden">
      {/* Animated stars background */}
      {stars.map((i) => (
        <motion.div
          key={i}
          className="absolute text-primary/30"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        >
          <Star className={`w-${Math.floor(Math.random() * 3) + 3} h-${Math.floor(Math.random() * 3) + 3}`} fill="currentColor" />
        </motion.div>
      ))}
      
      {/* Animated gradient blobs */}
      <motion.div 
        className="absolute top-40 left-[15%] w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-40 right-[15%] w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            <motion.span
              className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              MY WORK
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-5xl font-bold font-inter mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Featured Projects
            </motion.h2>
            
            <motion.div
              className="w-32 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            
            <motion.p
              className="text-center text-muted-foreground max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              A collection of my most significant work showcasing my technical skills and creative problem-solving
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                variants={projectVariants}
                whileHover={{ 
                  y: -15, 
                  transition: { duration: 0.3 },
                }}
                className="h-full"
              >
                <Card className="overflow-hidden border-primary/10 h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-lg hover:border-primary/30 transform-gpu">
                  <div className="relative">
                    <motion.div 
                      className="aspect-video relative overflow-hidden group"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Enhanced overlay with gradient */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        whileHover={{ opacity: 1 }}
                      />
                      
                      {/* Project number badge */}
                      <motion.div
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm z-10"
                        initial={{ scale: 0, rotate: -90 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: 0.5 + index * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {index + 1}
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-primary relative">
                      {project.title}
                      <motion.div 
                        className="h-1 w-0 bg-primary/30 absolute -bottom-1 left-0"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags?.map((tag, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Badge variant="secondary" className="text-xs px-2.5 py-0.5 bg-secondary/15 text-secondary-foreground hover:bg-secondary/30 transition-colors duration-300">
                            {tag}
                          </Badge>
                        </motion.div>
                      )) || (
                        <>
                          <Badge variant="secondary" className="text-xs">React</Badge>
                          <Badge variant="secondary" className="text-xs">TypeScript</Badge>
                          <Badge variant="secondary" className="text-xs">Tailwind</Badge>
                        </>
                      )}
                    </div>
                  </CardContent>
                  
                  <div className="p-6 pt-0 mt-auto">
                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        variant="default" 
                        className="flex-1 gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20" 
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <motion.span
                            className="flex items-center"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" /> Demo
                          </motion.span>
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 gap-2 border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300" 
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <motion.span
                            className="flex items-center"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Github className="w-4 h-4 mr-2" /> Code
                          </motion.span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          {/* View all projects button */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/20 hover:border-primary hover:bg-primary/5 group"
            >
              <motion.span
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                View All Projects
                <motion.div 
                  className="ml-2 w-4 h-0.5 bg-primary group-hover:w-6 transition-all duration-300"
                />
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

