import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Corp",
    period: "2022 - Present",
    description: "Led development of enterprise applications using React and Node.js",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Inc",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects",
  },
  {
    title: "Frontend Developer",
    company: "Web Agency",
    period: "2018 - 2020",
    description: "Specialized in creating responsive web applications",
  },
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
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};