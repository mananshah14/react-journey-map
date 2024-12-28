import { motion } from "framer-motion";
import { Badge } from "lucide-react";

const certifications = [
  {
    name: "CKA: Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    year: "2023"
  },
  {
    name: "VMware Certified Specialist – vSphere with Tanzu",
    issuer: "VMware",
    year: "2023"
  },
  {
    name: "VMware Certified Professional – Application Modernization",
    issuer: "VMware",
    year: "2023"
  },
  {
    name: "AZ-900: Microsoft Certified Azure Fundamentals",
    issuer: "Microsoft",
    year: "2022"
  },
  {
    name: "AZ-104: Microsoft Certified Azure Administrator Associate",
    issuer: "Microsoft",
    year: "2022"
  },
  {
    name: "Intel – High Performance Computing",
    issuer: "Intel",
    year: "2021"
  }
];

export const Certifications = () => {
  return (
    <section className="py-20 px-4" id="certifications">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-16"
        >
          Certifications
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <Badge className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">{cert.name}</h3>
                  <p className="text-gray-600 text-sm">{cert.issuer}</p>
                  <p className="text-primary text-sm mt-2">{cert.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};