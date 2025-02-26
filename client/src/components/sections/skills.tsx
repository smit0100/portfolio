import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SKILLS } from "@/lib/constants";

export default function Skills() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-inter mb-8 text-center">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SKILLS.map((skill, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex flex-col items-center">
                  <skill.icon className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground text-center">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
