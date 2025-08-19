// src/pages/services/ISO9001.jsx
import React from "react";
import { motion } from "framer-motion";

const ISO9001 = () => {
  return (
    <section className="min-h-screen py-16 px-6 bg-gradient-to-br from-white via-orange-50 to-yellow-100 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-orange-600 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ISO 9001 Quality Management System (QMS) Certification
        </motion.h1>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          The ISO 9001 certification process is designed to help organizations
          build a robust Quality Management System (QMS) that fosters continual
          improvement. Recognized and trusted worldwide, ISO 9001 offers
          flexibility, allowing companies to tailor their QMS to their specific
          products, customer requirements, and associated risks. This makes ISO
          9001 a foundational standard for organizations aiming to enhance their
          quality and risk management capabilities.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          TMC’s ISO 9001 certification consultancy services reflect a strong
          commitment to delivering quality and achieving customer excellence. By
          aligning your QMS with core business operations, the certification
          enables organizations to boost efficiency and ensure sustainable
          growth.
        </motion.p>

        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Achieving ISO 9001 certification helps improve customer satisfaction
          by focusing on quality objectives, enhances organizational efficiency
          by integrating quality management into daily operations, and supports
          continual improvement through regular audits and corrective actions.
          It also fosters a culture of risk-based thinking to proactively manage
          challenges, empowers employees by involving them in the quality
          improvement process, and strengthens your brand’s reputation through
          internationally recognized certification.
        </motion.p>
      </div>
    </section>
  );
};

export default ISO9001;
