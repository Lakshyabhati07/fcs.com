// src/pages/services/EFfCI_GMP.jsx

import { motion } from "framer-motion";

const EFfCI_GMP = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-gray-50 to-green-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h1
          className="text-3xl font-bold text-green-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About EFfCI and Its GMP Standard
        </motion.h1>

        {/* Intro Paragraphs */}
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          EFfCI, the European Federation for Cosmetic Ingredients, is a trade association
          that unites European manufacturers of both synthetic and natural ingredients
          used in the cosmetics and personal care industry. As a significant standard
          within this sector, EFfCI GMP certification enables manufacturers of raw
          materials to demonstrate their adherence to Good Manufacturing Practices. This
          not only ensures the safety and high quality of cosmetic raw materials but
          also fosters strong confidence among customers and stakeholders.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          The EFfCI GMP Standard was developed to strengthen the safety and quality of
          cosmetic products by focusing on the consistent and controlled production of
          cosmetic raw materials. In response to increasing expectations from both
          customers and end-users, EFfCI designed the certification to provide clear
          proof of compliance with GMP principles specific to the cosmetics industry.
          Central to this certification is the application of Good Manufacturing Practice
          (GMP) in the production processes, with emphasis on both the raw material
          quality and the integrity of manufacturing operations.
        </motion.p>

        <motion.p
          className="mb-6 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Initially published in 2005, the EFfCI GMP Standard is now in its fourth
          edition, which aligns closely with the ISO 9001 quality management system.
        </motion.p>

        {/* Key Benefits Section */}
        <motion.h2
          className="text-2xl font-semibold text-green-600 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Key Benefits of EFfCI GMP Certification
        </motion.h2>

        <motion.p
          className="mb-6 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Achieving certification provides verified evidence that appropriate facilities,
          equipment, and production controls are established to ensure the consistent
          quality of cosmetic ingredients. It also equips manufacturers with a compelling
          and credible foundation for entering new markets and attracting new customer
          segments.
        </motion.p>

        {/* Why Get Certified Section */}
        <motion.h2
          className="text-2xl font-semibold text-green-600 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Why Get Certified to EFfCI GMP With Us
        </motion.h2>

        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          We offer all essential audit services for cosmetic sector certifications through
          a single, reliable source. Our team brings deep expertise and industry-specific
          experience, along with a strong customer-focused approach and personal
          communication. Clients also benefit from our professional support that extends
          well beyond the audit process, ensuring long-term compliance and continual
          improvement.
        </motion.p>
      </div>
    </section>
  );
};

export default EFfCI_GMP;
