import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-inter mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
                alt="Professional headshot"
                className="object-cover w-full h-full"
              />
            </div>
            <Card>
              <CardContent className="p-6">
                <p className="text-lg mb-4">
                  I am a Full Stack Developer with comprehensive experience in web development, focusing on building scalable and efficient applications using modern technologies.
                </p>
                <p className="text-lg mb-4">
                  Currently pursuing my education at the Faculty of Engineering and Applied Science, I combine academic knowledge with practical development experience to create innovative solutions.
                </p>
                <p className="text-lg">
                  My development approach emphasizes clean code, user experience, and performance optimization, ensuring that applications are both functional and maintainable.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}