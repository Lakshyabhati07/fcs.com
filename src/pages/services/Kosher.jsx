// src/pages/services/Kosher.jsx
import React from "react";
import { motion } from "framer-motion";

const Kosher = () => {
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
          Kosher Certification Overview
        </motion.h1>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          Kosher refers to food that is permitted and lawful under Jewish
          dietary laws. It outlines specific requirements for the preparation and
          consumption of meat, dairy, and pareve foods. Pareve items are those
          that are neither meat nor dairy, including products such as eggs,
          fruits, vegetables, grains, unprocessed juices, pasta, soft drinks,
          coffee, tea, and various candies and snacks.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          The Kosher standard provides a comprehensive framework for complying
          with traditional Jewish dietary requirements while also aligning with
          fundamental food safety practices such as personal hygiene and facility
          infrastructure standards.
        </motion.p>

        {/* Certification Importance */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          Organizations in the food supply chain must demonstrate compliance
          with Kosher requirements to ensure their products are suitable for
          Jewish consumers and safe for general consumption. Although Kosher
          certification is voluntary, it is often required by international
          corporations and retailers. Certification builds trust and opens up
          access to new markets.
        </motion.p>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Benefits of Kosher Certification
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>
              Demonstrates an organization's commitment to Jewish dietary
              compliance.
            </li>
            <li>
              Provides access to Kosher-certified product markets worldwide.
            </li>
            <li>
              Builds consumer confidence and strengthens brand credibility.
            </li>
            <li>
              Supports vendor registration with major retail chains.
            </li>
            <li>
              Helps companies tap into the growing Kosher market, valued at over
              $165 billion globally.
            </li>
            <li>
              Enhances packaging credibility with the Kosher-certified logo.
            </li>
          </ul>
        </motion.div>

        {/* Certification Process Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Kosher Certification Process
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            After finalizing the agreement with the client, Quality Systems
            experts visit the organization’s premises to conduct a comprehensive
            gap analysis against Kosher standards. The gap report covers
            documentation, implementation, employee awareness, processing,
            traceability, and ingredient verification.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Once requirements are fulfilled, the audit process begins. A Rabbi
            audits the production process, raw materials, documentation, and
            records. After successful completion, the certification body issues a
            certificate valid for one year.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Kosher certification must be renewed annually before expiry. Each
            year, a re-audit is conducted to maintain certification validity and
            ensure ongoing compliance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Kosher;
