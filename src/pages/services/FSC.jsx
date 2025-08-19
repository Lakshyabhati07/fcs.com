// src/pages/services/FSC.jsx

import { motion } from "framer-motion";

const FSC = () => {
  return (
    <section className="min-h-screen py-16 px-6 bg-gradient-to-br from-white via-green-50 to-green-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <motion.h1
          className="text-3xl font-bold text-green-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Responsible Forest Management – Forest Stewardship Council® (FSC®)
        </motion.h1>

        {/* Introduction */}
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          The Forest Stewardship Council® (FSC®) certification is a globally recognized
          system that promotes responsible forest management and the sustainable trade of
          wood-based products originating from certified forests. The certification
          supports the marketing and commercialization of products that meet strict
          environmental, social, and economic standards.
        </motion.p>

        {/* FSC Certification Types */}
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          FSC certification offers two primary types of assurance. The first is{" "}
          <span className="font-semibold">Forest Management Certification</span>, which
          guarantees the implementation of responsible forest practices aligned with
          FSC's principles and compliance criteria, covering ecological preservation,
          social responsibility, and economic viability. The second is{" "}
          <span className="font-semibold">Chain of Custody Certification</span>, which
          ensures the traceability of certified wood and wood-based materials from the
          forest of origin through each stage of processing and distribution, up to the
          final consumer.
        </motion.p>

        {/* Scope of FSC Certification */}
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          FSC certification applies to a broad range of products derived from certified
          forests, including wood, fibres, pulp, paper, cardboard, textiles, cork, and
          bamboo. It is relevant to forest owners and managers, as well as companies
          across the supply chain—such as producers, processors, traders, merchants, and
          printers—who wish to demonstrate commitment to responsible forestry and sell
          FSC-certified products.
        </motion.p>
      </div>
    </section>
  );
};

export default FSC;
