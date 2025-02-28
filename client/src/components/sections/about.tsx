import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Assuming this import is needed


export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-t from-background to-muted/30 relative overflow-hidden">
      {/* Background decoration elements */}
      <motion.div 
        className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute bottom-20 left-[10%] w-64 h-64 rounded-full bg-secondary/5 blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-inter mb-2 text-center"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="w-20 h-1 bg-primary mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="overflow-hidden border-primary/10 shadow-xl backdrop-blur-sm bg-card/90">
              <CardContent className="p-8">
                <div className="grid gap-8">
                  {/* <motion.div
                    className="flex flex-col items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {/* <img 
                      src="https://github.com/identicons/app/blob/main/public/identicons/smit.png?raw=true" 
                      alt="Profile" 
                      className="w-40 h-40 rounded-xl object-cover shadow-md border-2 border-primary/20 mb-4" 
                    /> */}
                    {/* <div className="flex gap-2 mt-4">
                      <Badge variant="outline" className="px-3 py-1 border-primary/20 text-primary">Next.js</Badge>
                      <Badge variant="outline" className="px-3 py-1 border-primary/20 text-primary">React</Badge>
                      <Badge variant="outline" className="px-3 py-1 border-primary/20 text-primary">Node.js</Badge>
                    </div>
                  </motion.div> */} 

                  <div className="space-y-4">
                    <motion.p 
                      className="text-lg leading-relaxed"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      I am a <span className="font-semibold text-primary">Full Stack Developer</span> with comprehensive experience in web development, focusing on building scalable and efficient applications using modern technologies like Next.js, React, and Node.js.
                    </motion.p>

                    <motion.p 
                      className="text-lg leading-relaxed"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      Currently working as a <span className="font-semibold text-primary">Trainee at Inventyv Software Services Pvt. Ltd.</span>, where I contribute to developing innovative solutions and learning cutting-edge technologies. Additionally, I work as a <span className="font-semibold text-primary">freelance Next.js developer</span>, creating custom web applications for clients.
                    </motion.p>

                    <motion.p 
                      className="text-lg leading-relaxed"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      My development approach emphasizes <span className="font-semibold text-primary">clean code, user experience, and performance optimization</span>. I specialize in building SaaS platforms and implementing automated web scraping solutions, ensuring that applications are both functional and maintainable.
                    </motion.p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}