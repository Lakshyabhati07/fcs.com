// src/pages/services/GlutenFree.jsx
import React from "react";
import { motion } from "framer-motion";

const GlutenFree = () => {
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
          Gluten-Free Certification
        </motion.h1>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          The Gluten-Free Certification Standard offers independent third-party
          verification that an organization's production, handling, and quality
          systems are compliant with defined requirements to exclude gluten.
          This certification ensures that products are free from gluten and
          aligns with regulatory frameworks such as the U.S. Food Allergen
          Labeling and Consumer Protection Act (FALCPA) and the FDA’s final rule
          on gluten-free labeling.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          The standard is also applicable in Europe for products intended for
          sale in North America and Canada, covering the entire supply
          chain—including procurement, production, handling, processing,
          storage, distribution, and labeling—to validate the absence of gluten
          throughout.
        </motion.p>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Why Gluten-Free Certification?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By certifying that appropriate controls are implemented and
            maintained, the Gluten-Free Certification Standard not only confirms
            product integrity but also builds consumer trust in gluten-free
            claims.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            In addition, the certification program integrates seamlessly with
            existing Global Food Safety Initiative (GFSI) food safety
            certifications, offering businesses a cost-effective and efficient
            solution while minimizing audit fatigue.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GlutenFree;
