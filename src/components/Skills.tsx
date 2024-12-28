import { motion } from "framer-motion";
import { Database, Cloud, Code, Network, Server, Lock } from "lucide-react";

const skills = [
  {
    category: "Cloud & Platforms",
    items: ["AWS", "Azure", "VMware vSphere"],
    icon: Cloud,
    color: "text-blue-500"
  },
  {
    category: "DevOps Tools",
    items: ["Docker", "Kubernetes", "Jenkins", "ArgoCD"],
    icon: Server,
    color: "text-purple-500"
  },
  {
    category: "Infrastructure",
    items: ["Terraform", "Ansible", "Crossplane"],
    icon: Database,
    color: "text-green-500"
  },
  {
    category: "Programming",
    items: ["Python", "Shell Scripting"],
    icon: Code,
    color: "text-yellow-500"
  },
  {
    category: "Networking",
    items: ["Load Balancing", "DNS", "VPN", "Firewalls"],
    icon: Network,
    color: "text-red-500"
  },
  {
    category: "Security",
    items: ["Kubernetes Security", "Cloud Security"],
    icon: Lock,
    color: "text-indigo-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  }
};

export const Skills = () => {
  return (
    <section className="py-20 px-4 bg-white" id="skills">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-16"
        >
          Technical Skills
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="p-6 rounded-lg bg-white hover:bg-muted transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <motion.div 
                  className="flex items-center gap-4 mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className={`${skill.color}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </motion.div>
                <motion.ul 
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {skill.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};