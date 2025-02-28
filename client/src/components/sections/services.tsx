import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";

// export default function Services() {
//   return (
//     <section id="services" className="py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-3xl font-bold font-inter mb-8 text-center">Services</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {SERVICES.map((service, index) => (
//               <Card key={index}>
//                 <CardHeader>
//                   <service.icon className="w-10 h-10 text-primary mb-4" />
//                   <CardTitle>{service.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">{service.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );

export default function Services() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const serviceVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };
  
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-t from-muted/30 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-primary/5 to-secondary/5 blur-3xl"
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
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
              WHAT I OFFER
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-5xl font-bold font-inter mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              My Services
            </motion.h2>
            
            <motion.div
              className="w-28 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 112 }}
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
              I offer comprehensive development solutions to bring your digital ideas to life
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                variants={serviceVariants}
                whileHover={{ 
                  y: -12,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <Card className="h-full border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-lg overflow-hidden relative">
                  {/* Gradient overlay that appears on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Number indicator */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 flex items-end justify-start pb-1.5 pl-1.5 text-3xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                    0{index + 1}
                  </div>
                  
                  <CardContent className="p-8 flex flex-col items-center text-center relative z-10">
                    <motion.div
                      className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-primary/10 text-primary"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: 0.2 + index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        backgroundColor: "rgba(124, 58, 237, 0.2)", // Primary color with opacity
                        transition: { duration: 0.3 }
                      }}
                    >
                      <service.icon className="w-8 h-8" />
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-bold mb-3 relative inline-block"
                      whileHover={{ scale: 1.05 }}
                    >
                      {service.title}
                      <motion.div 
                        className="h-1 w-0 bg-primary/30 absolute -bottom-1 left-0 right-0 mx-auto group-hover:w-full transition-all duration-300"
                      />
                    </motion.h3>
                    
                    <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Animated arrow indicator */}
                    <motion.div
                      className="mt-6 flex items-center text-primary/70 group-hover:text-primary transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm font-medium mr-2">Learn More</span>
                      <motion.div 
                        className="w-4 h-0.5 bg-primary transform origin-left group-hover:w-6 transition-all duration-300"
                      />
                    </motion.div>
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