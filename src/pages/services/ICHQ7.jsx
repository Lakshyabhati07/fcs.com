// src/pages/services/ICHQ7.jsx
import React from "react";
import { motion } from "framer-motion";

const ICHQ7 = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-indigo-50 to-indigo-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h1
          className="text-3xl font-bold text-indigo-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ICH Q7 – Good Manufacturing Practice for Active Pharmaceutical Ingredients
        </motion.h1>

        {/* Introduction */}
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We support professionals in pharmaceutical organizations by helping them continuously
          enhance their regulatory systems. This enables them to maintain compliance while gaining
          a competitive edge in the industry. Our services include a diverse selection of highly
          regarded live online classroom sessions and training courses. In addition to training,
          we offer expert consultancy services to our global pharmaceutical clients, ensuring
          tailored support in navigating complex regulatory environments.
        </motion.p>

        {/* Understanding ICH Q7 */}
        <motion.h2
          className="text-2xl font-semibold text-indigo-600 mt-8 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Understanding ICH Q7 Guidelines
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          The ICH Q7 guideline—Good Manufacturing Practice Guidance for Active Pharmaceutical
          Ingredients—is designed to offer comprehensive guidance on GMP for the production of
          APIs. It outlines the principles necessary for maintaining an appropriate system for
          quality management in the manufacturing of APIs. The goal is to ensure that these
          ingredients consistently meet established standards for quality and purity.
        </motion.p>

        {/* Regulatory Applicability */}
        <motion.h2
          className="text-2xl font-semibold text-indigo-600 mt-8 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Regulatory Applicability
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Globally, materials may be classified differently depending on the region. When a
          material is designated as an API in the country where it is produced or used in a drug
          product, its manufacturing must comply with the ICH Q7 guidelines.
        </motion.p>

        {/* Scope */}
        <motion.h2
          className="text-2xl font-semibold text-indigo-600 mt-8 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Scope of the Guideline
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          This guideline is applicable to the manufacturing of active pharmaceutical ingredients
          intended for use in human medicinal products. It extends to the production of sterile
          APIs up to the point just before the sterilization process. The scope includes APIs
          manufactured through chemical synthesis, extraction, fermentation or cell culture,
          recovery from natural sources, or any combination of these methods.
        </motion.p>

        {/* The Five Key Elements of GMP */}
        <motion.h2
          className="text-2xl font-semibold text-indigo-600 mt-8 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          The Five Key Elements of GMP
        </motion.h2>
        <motion.ul
          className="list-disc pl-6 space-y-2 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <li>
            <strong>Raw Materials:</strong> The quality of the product depends heavily on the purity
            and standard of the raw materials used.
          </li>
          <li>
            <strong>Personnel:</strong> Well-qualified and trained personnel are essential to ensure
            compliance.
          </li>
          <li>
            <strong>Processes:</strong> Robust and clearly defined processes must be established and
            maintained.
          </li>
          <li>
            <strong>Procedures:</strong> Documented procedures are required to support consistent
            execution.
          </li>
          <li>
            <strong>Premises:</strong> Facilities and equipment must be maintained to high standards
            to support hygienic and controlled production environments.
          </li>
        </motion.ul>
      </div>
    </section>
  );
};

export default ICHQ7;
