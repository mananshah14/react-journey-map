import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Navigation } from "@/components/Navigation";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative"
    >
      <Navigation />
      <section id="about">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-center mb-8"
          >
            Get in Touch
          </motion.h2>
          <div className="flex justify-center items-center gap-8">
            <a 
              href="mailto:mananbshah1@gmail.com"
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/manan-shah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#0077B5] text-white px-6 py-3 rounded-lg hover:bg-[#0077B5]/90 transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
      <Certifications />
    </motion.main>
  );
};

export default Index;