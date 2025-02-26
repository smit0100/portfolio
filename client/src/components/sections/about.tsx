import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-inter mb-8 text-center">About Me</h2>
          <Card>
            <CardContent className="p-6">
              <motion.p 
                className="text-lg mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                I am a Full Stack Developer with comprehensive experience in web development, focusing on building scalable and efficient applications using modern technologies like Next.js, React, and Node.js.
              </motion.p>
              <motion.p 
                className="text-lg mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Contact me at{" "}
                <a 
                  href="mailto:smitdankhra01@gmail.com" 
                  className="text-primary hover:underline"
                >
                  smitdankhra01@gmail.com
                </a>
                {" "}or connect with me on{" "}
                <a 
                  href="https://www.linkedin.com/in/smit-dankhra" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline"
                >
                  LinkedIn
                </a>
              </motion.p>
                Currently working as a Trainee at Inventyv Software Services Pvt. Ltd., where I contribute to developing innovative solutions and learning cutting-edge technologies. Additionally, I work as a freelance Next.js developer, creating custom web applications for clients.
              </motion.p>
              <motion.p 
                className="text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                My development approach emphasizes clean code, user experience, and performance optimization. I specialize in building SaaS platforms and implementing automated web scraping solutions, ensuring that applications are both functional and maintainable.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}