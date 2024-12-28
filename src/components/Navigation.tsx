import { motion } from "framer-motion";
import { User, Code, Briefcase, Mail } from "lucide-react";

export const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { icon: User, label: 'About', id: 'about' },
    { icon: Code, label: 'Skills', id: 'skills' },
    { icon: Briefcase, label: 'Experience', id: 'experience' },
    { icon: Mail, label: 'Contact', id: 'contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 p-6 z-50 bg-white/80 backdrop-blur-sm rounded-bl-lg shadow-sm"
    >
      <ul className="flex items-center gap-6">
        {navItems.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              onClick={() => scrollToSection(item.id)}
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};