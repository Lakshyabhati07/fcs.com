// src/pages/services/Organic.jsx
import React from "react";
import { motion } from "framer-motion";

const Organic = () => {
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
          ORGANIC Certification Overview
        </motion.h1>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          Organic certification allows agricultural and food products to be
          marketed as organic both domestically and internationally. In the USA,
          organic agriculture is governed by the USDA National Organic Program
          (USDA NOP), while in India, it is regulated by the National Program for
          Organic Production (NPOP).
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          ORGANIC Certification enables certified products to be marketed within
          India, the USA, Canada, the European Union, and many other countries,
          making it essential for businesses aiming to access premium organic
          markets globally.
        </motion.p>

        {/* Stakeholders */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          Certification is available to a wide range of stakeholders in the
          agri-food sector, including farmers, producers, processors,
          distributors, exporters, and others involved in the supply chain. It
          covers a variety of product categories such as agricultural raw
          materials, food products, livestock, and animal feed processing and
          handling.
        </motion.p>

        {/* Principles Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Core Principles of Organic Agriculture
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Climate and environmental protection.</li>
            <li>Conservation of soil fertility and health.</li>
            <li>Preservation of biodiversity.</li>
            <li>Respect for natural life cycles and animal welfare.</li>
            <li>
              Strict avoidance of chemical or synthetic products and GMOs
              (genetically modified organisms).
            </li>
            <li>
              Transparent labeling to help consumers make informed and conscious
              choices.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Organic;
