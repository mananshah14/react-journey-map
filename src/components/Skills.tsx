import { motion } from "framer-motion";
import { Database, Cloud, Code, Network, Server, Lock } from "lucide-react";

const skills = [
  {
    category: "Cloud & Platforms",
    items: ["AWS", "Azure", "VMware vSphere"],
    icon: <Cloud className="w-8 h-8" />
  },
  {
    category: "DevOps Tools",
    items: ["Docker", "Kubernetes", "Jenkins", "ArgoCD"],
    icon: <Server className="w-8 h-8" />
  },
  {
    category: "Infrastructure",
    items: ["Terraform", "Ansible", "Crossplane"],
    icon: <Database className="w-8 h-8" />
  },
  {
    category: "Programming",
    items: ["Python", "Shell Scripting"],
    icon: <Code className="w-8 h-8" />
  },
  {
    category: "Networking",
    items: ["Load Balancing", "DNS", "VPN", "Firewalls"],
    icon: <Network className="w-8 h-8" />
  },
  {
    category: "Security",
    items: ["Kubernetes Security", "Cloud Security"],
    icon: <Lock className="w-8 h-8" />
  }
];

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-muted hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-primary">{skill.icon}</div>
                <h3 className="text-xl font-bold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};