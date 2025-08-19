// src/pages/services/ProjectManagementConsultancy.jsx
import React from "react";
import { motion } from "framer-motion";

const ProjectManagementConsultancy = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-blue-50 to-sky-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-blue-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Project Management Consultancy Services
        </motion.h1>

        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We offer project management consultancy services to our valued clients, ensuring 
          delivery within a defined timeline. Our consultancy services are highly appreciated 
          for their reliability and responsiveness. We specialize in turnkey design and 
          engineering solutions, transforming land into fully operational plants.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          All services are executed in close coordination with clients to ensure seamless 
          integration across project stages, enabling timely and cost-effective completion. 
          Our team of experienced engineers and process experts delivers solutions tailored to 
          the specific requirements of each customer.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-blue-600 mt-6 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Our Consultancy Framework
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          The consultancy framework incorporates internationally recognized and independent 
          standards such as ISO 22000, ISO 9001, ISO/TS 22003, and sector-specific technical 
          specifications for Pre-Requisite Programs (PRPs) including ISO/TS 22002-1. In 
          addition to these standards, the framework also integrates FSSC Additional 
          Requirements, as detailed in the FSSC 22000 Scheme documents available on the 
          official FSSC 22000 website.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-blue-600 mt-6 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Technical Consultancy Services
        </motion.h2>
        <motion.ul
          className="list-disc pl-6 text-gray-700 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <li>Process and conceptual planning</li>
          <li>Civil and structural engineering</li>
          <li>Plant layout development</li>
          <li>Piping and utility design</li>
          <li>Project and process engineering</li>
          <li>Implementation of robust management systems</li>
          <li>Effluent and sewage treatment and disposal</li>
          <li>Assistance with regulatory and statutory licensing, certification, and compliance</li>
        </motion.ul>

        <motion.p
          className="mt-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Our services are delivered in a timely and hassle-free manner, offering 
          cost-effective solutions while ensuring the highest level of quality and compliance.
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectManagementConsultancy;
