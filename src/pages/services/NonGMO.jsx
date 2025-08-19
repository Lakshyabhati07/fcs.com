// src/pages/services/NonGMO.jsx
import React from "react";
import { motion } from "framer-motion";

const NonGMO = () => {
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
          Non-GMO Certification Overview
        </motion.h1>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          Due to growing consumer concerns regarding the long-term health and
          environmental effects of genetically modified organisms (GMOs), there
          has been a significant rise in demand for certified non-GMO food
          products. Consumers are increasingly focused on the transparency of
          food sourcing, prompting many countries to enforce mandatory labeling
          laws for foods that contain GM ingredients above a certain threshold.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          In response to this shift, the Non-GMO Global Standard has emerged as
          an industry-recognized benchmark for ensuring a non-GMO production
          system. It is built on a quality management system that prioritizes
          identity preservation through a comprehensive approach involving risk
          assessments, traceability, and rigorous sampling and testing protocols
          to verify compliance. Certification bodies evaluate organizations
          annually to ensure they continue to meet these stringent standards.
        </motion.p>

        {/* Global Regulations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Global Standards & Labeling Compliance
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Non-GMO program helps companies align with various international
            labelling regulations, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mt-3">
            <li>
              The European Union’s Regulation (EC) No. 1830/2003 on the
              traceability and labeling of GMOs.
            </li>
            <li>Brazil’s Decree No. 4680.</li>
            <li>Other recognized global labeling requirements.</li>
          </ul>
        </motion.div>

        {/* Added Benefits */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-gray-700 text-lg leading-relaxed"
        >
          The certification also supports risk-based sampling, the issuance of
          Traceability Certificates of Compliance (TCCs) down to the batch or
          lot level, and authorizes the use of the Non-GMO seal—offering
          value-added recognition for certified products in competitive markets.
        </motion.p>
      </div>
    </section>
  );
};

export default NonGMO;
