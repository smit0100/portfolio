import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SKILLS } from "@/lib/constants";

export default function Skills() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  // Glowing particles animation
  const particles = Array.from({ length: 8 }).map((_, i) => i);

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-t from-muted/50 via-background to-background relative overflow-hidden">
      {/* Particle animations */}
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/60 z-0"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0.2,
            scale: Math.random() * 1 + 0.5
          }}
          animate={{
            x: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%"
            ],
            y: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%"
            ],
            opacity: [0.2, 0.6, 0.2],
            scale: [Math.random() + 0.5, Math.random() * 2 + 1, Math.random() + 0.5]
          }}
          transition={{
            duration: 15 + Math.random() * 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Gradient blobs */}
      <motion.div 
        className="absolute top-40 right-[15%] w-96 h-96 rounded-full bg-primary/5 blur-3xl z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-40 left-[15%] w-96 h-96 rounded-full bg-secondary/5 blur-3xl z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold font-inter mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5,
              type: "spring",
              stiffness: 100
            }}
          >
            Technical Skills
          </motion.h2>
          
          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-4 rounded-full"
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
            Specialized in modern technologies that power today's web and mobile applications
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {SKILLS.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -12, 
                  transition: { duration: 0.3 },
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <Card className="h-full border-primary/10 shadow-xl transition-all duration-300 bg-card/70 backdrop-blur-lg overflow-hidden hover:border-primary/30 relative">
                  {/* Subtle background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-6 flex flex-col items-center relative z-10">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 260, 
                        damping: 20,
                        delay: 0.1 + index * 0.05
                      }}
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1,
                        transition: { duration: 0.5 }
                      }}
                      className="relative"
                    >
                      {/* Enhanced icon glow effect */}
                      <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-md opacity-70" />
                      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-3 rounded-full">
                        <skill.icon className="w-14 h-14 mb-5 text-primary relative" />
                      </div>
                    </motion.div>
                    
                    <motion.h3 
                      className="font-semibold text-lg mb-2 text-center"
                      whileHover={{
                        color: "#6d28d9", // A primary purple color
                        transition: { duration: 0.2 }
                      }}
                    >
                      {skill.name}
                    </motion.h3>
                    <p className="text-sm text-muted-foreground text-center">{skill.description}</p>
                    
                    {/* Progress indicator */}
                    <motion.div 
                      className="w-16 h-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full mt-4"
                      initial={{ width: 0 }}
                      whileInView={{ width: 64 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
