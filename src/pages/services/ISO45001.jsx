// src/pages/services/ISO45001.jsx
import React from "react";
import { motion } from "framer-motion";

const ISO45001 = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-lime-50 to-green-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-orange-600 mb-6"
        >
          ISO 45001 Occupational Health and Safety Management System (OHSMS) Certification
        </motion.h1>

        {/* Content */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          ISO 45001 is the international standard for Occupational Health and Safety Management 
          Systems (OHSMS), designed to help organizations implement a structured approach to 
          workplace health and safety or enhance an existing system. Achieving ISO 45001 certification 
          demonstrates an organization's commitment to safeguarding the well-being of its workforce 
          across all operations.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          The certification supports the development of a tailored health and safety framework suited 
          to the specific needs and risks of a business. It enables organizations to identify workplace 
          hazards and implement effective controls, significantly reducing incidents and promoting a 
          culture of safety. ISO 45001 also encourages active participation from employees, increasing 
          risk awareness and ensuring collective responsibility for health and safety.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-gray-700 text-lg leading-relaxed"
        >
          Certification helps reduce downtime, lower the costs associated with workplace incidents and 
          insurance premiums, and ultimately enhances the organization’s reputation through compliance 
          with globally recognized occupational health and safety standards.
        </motion.p>
      </div>
    </section>
  );
};

export default ISO45001;
