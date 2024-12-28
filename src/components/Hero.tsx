import { motion } from "framer-motion";
import { Linkedin, Mail, FileText } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Hi, I'm <span className="text-primary">Manan Shah</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 mb-4"
          >
            Senior DevOps Engineer
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 mb-8"
          >
            Based in Bangalore, India | +91-8296335271 | mananbshah1@gmail.com
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="https://www.linkedin.com/in/manan-shah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn Profile
            </a>
            <button className="flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors">
              <FileText className="w-5 h-5" />
              Download CV
            </button>
            <a 
              href="mailto:mananbshah1@gmail.com"
              className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-1/2"
        >
          <img 
            src="/lovable-uploads/f1f76c49-6a1d-4652-98d4-70670bedb219.png"
            alt="Profile"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};