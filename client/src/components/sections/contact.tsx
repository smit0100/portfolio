import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import {Card, CardContent, CardTitle} from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

// export default function Contact() {
//   const { toast } = useToast();
//   const form = useForm<FormValues>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       message: "",
//     },
//   });

//   const onSubmit = async (data: FormValues) => {
//     try {
//       await apiRequest("POST", "/api/contact", data);

//       toast({
//         title: "Message sent successfully!",
//         description: "Thank you for reaching out. I'll get back to you soon.",
//       });

//       form.reset();
//     } catch (error: any) {
//       console.error("Contact form error:", error);
//       toast({
//         title: "Failed to send message",
//         description: "There was an error sending your message. Please try again later or contact me directly at smitdankhra86@gmail.com",
//         variant: "destructive",
//       });
//     }
//   };

//   return (
//     <section id="contact" className="py-16 px-4 bg-muted/30">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-3xl font-bold font-inter mb-8 text-center">Get in Touch</h2>
//           <div className="max-w-md mx-auto">
//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//                 <FormField
//                   control={form.control}
//                   name="name"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Name</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Your name" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Email</FormLabel>
//                       <FormControl>
//                         <Input placeholder="your.email@example.com" type="email" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="message"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Message</FormLabel>
//                       <FormControl>
//                         <Textarea 
//                           placeholder="Your message..." 
//                           className="min-h-[120px]" 
//                           {...field} 
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <Button 
//                   type="submit" 
//                   className="w-full"
//                   disabled={form.formState.isSubmitting}
//                 >
//                   {form.formState.isSubmitting ? "Sending..." : "Send Message"}
//                 </Button>
//               </form>
//             </Form>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function Contact() {
  const formFieldVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const contactInfoVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background via-background to-muted/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(8)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${Math.random() * 100} ${Math.random() * 100} Q ${Math.random() * 100} ${Math.random() * 100}, ${Math.random() * 100} ${Math.random() * 100}`}
              stroke="rgba(124, 58, 237, 0.05)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 0.3,
                d: [
                  `M${Math.random() * 100} ${Math.random() * 100} Q ${Math.random() * 100} ${Math.random() * 100}, ${Math.random() * 100} ${Math.random() * 100}`,
                  `M${Math.random() * 100} ${Math.random() * 100} Q ${Math.random() * 100} ${Math.random() * 100}, ${Math.random() * 100} ${Math.random() * 100}`,
                ]
              }}
              transition={{ 
                duration: 20 + i * 5, 
                repeat: Infinity, 
                ease: "easeInOut", 
                repeatType: "reverse" 
              }}
            />
          ))}
        </svg>
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
              GET IN TOUCH
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-5xl font-bold font-inter mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Contact Me
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
              Feel free to reach out for collaborations, opportunities, or just a friendly chat
            </motion.p>
          </motion.div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact information */}
            <motion.div 
              className="lg:col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            >
              <Card className="h-full bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/10 backdrop-blur-lg overflow-hidden shadow-xl">
                <CardContent className="p-8 h-full flex flex-col">
                  <motion.h3 
                    className="text-2xl font-bold mb-6"
                    variants={contactInfoVariants}
                  >
                    Let's talk about your project
                  </motion.h3>
                  
                  <motion.p 
                    className="text-muted-foreground mb-8"
                    variants={contactInfoVariants}
                  >
                    Get in touch and let me know how I can help bring your ideas to life.
                  </motion.p>
                  
                  <div className="space-y-6 flex-grow">
                    <motion.div 
                      className="flex items-start"
                      variants={contactInfoVariants}
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-muted-foreground">{CONTACT_INFO.email}</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      variants={contactInfoVariants}
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Phone</h4>
                        <p className="text-muted-foreground">{CONTACT_INFO.phone}</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      variants={contactInfoVariants}
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Location</h4>
                        <p className="text-muted-foreground">{CONTACT_INFO.location}</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="mt-8 pt-6 border-t border-primary/10"
                    variants={contactInfoVariants}
                  >
                    <h4 className="font-semibold mb-3">Follow Me</h4>
                    <div className="flex gap-4">
                      {/* Social icons here */}
                      <motion.a
                        href={CONTACT_INFO.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </motion.a>
                      
                      <motion.a
                        href={CONTACT_INFO.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </motion.a>
                      
                      <motion.a
                        href={CONTACT_INFO.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </motion.a>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Contact form */}
            <motion.div 
              className="lg:col-span-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
            >
              <Card className="border-primary/10 shadow-xl backdrop-blur-lg overflow-hidden bg-card/90">
                <CardContent className="p-8">
                  <form>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <motion.div variants={formFieldVariants}>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          className="w-full border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                        />
                      </motion.div>
                      
                      <motion.div variants={formFieldVariants}>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Your Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="w-full border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div className="mb-6" variants={formFieldVariants}>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Project Inquiry"
                        className="w-full border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                      />
                    </motion.div>
                    
                    <motion.div className="mb-6" variants={formFieldVariants}>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder="Tell me about your project..."
                        className="w-full border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300 resize-none"
                      />
                    </motion.div>
                    
                    <motion.div variants={formFieldVariants}>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium py-3 rounded-md transition-all duration-300 group"
                      >
                        <motion.span
                          className="flex items-center justify-center"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          Send Message
                          <Send className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.span>
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
