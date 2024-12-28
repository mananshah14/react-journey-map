import { motion } from "framer-motion";

const experiences = [
  {
    title: "DevOps Engineer",
    company: "Ozone Cloud Pvt. Ltd",
    period: "12/2021 - Present",
    description: "Led cloud cost optimization initiatives reducing costs by 40% through workload repatriation. Implemented monitoring solutions using Kube-Prometheus Stack and managed multi-cloud deployments.",
    achievements: [
      "Established monitoring/observability using Kube-Prometheus Stack, Mimir, and Grafana",
      "Set up CI/CD pipelines using Ozone, Jenkins, and ArgoCD",
      "Reduced cloud costs by 30% through usage monitoring and optimization"
    ]
  },
  {
    title: "Associate System Engineer",
    company: "NxtGen Infinite Datacenter",
    period: "01/2021 - 11/2021",
    description: "Managed Kubernetes clusters and led HPC as a service implementation for research projects. Specialized in client onboarding and infrastructure configuration.",
    achievements: [
      "Led HPCaaS client onboarding for AI & ML projects",
      "Configured servers and firewall settings using PF sense on VMware vSphere",
      "Implemented Ansible playbooks for automated server configuration"
    ]
  }
];

export const Experience = () => {
  return (
    <section className="py-20 px-4 bg-muted" id="experience">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-16"
        >
          Professional Experience
        </motion.h2>
        
        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="timeline-item"
            >
              <div className="timeline-content">
                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                <p className="text-primary font-medium mb-2">{exp.company}</p>
                <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <ul className="list-disc list-inside text-gray-600">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="mb-1">{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};