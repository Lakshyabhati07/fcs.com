// src/pages/services/IFS.jsx
import React from "react";
import { motion } from "framer-motion";

const IFS = () => {
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
          International Featured Standard (IFS) – Food Certification
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          IFS Food is a globally recognized standard, acknowledged by the Global
          Food Safety Initiative (GFSI), designed to certify the safety and
          quality of food products and food production processes.
        </motion.p>

        {/* Evaluation System */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            This standardized evaluation system helps organizations:
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Reduce the frequency of repeat audits, saving time and resources.
            </li>
            <li>
              Enhance the understanding of food safety and quality practices
              across all levels of the organization.
            </li>
            <li>
              Promote transparency and consistency throughout the supply chain.
            </li>
          </ul>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Benefits of IFS Food Certification
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Achieving IFS Food certification offers a wide range of benefits:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Ensures compliance with internationally recognized food safety and
              quality standards.
            </li>
            <li>
              Strengthens consumer confidence and enhances brand reputation.
            </li>
            <li>
              Facilitates market access by meeting the requirements of major
              retailers and global partners.
            </li>
            <li>
              Supports continuous improvement of internal processes, enabling
              more efficient operations.
            </li>
            <li>
              Reduces duplication of audits through a uniform assessment
              approach, aligned with GFSI expectations.
            </li>
          </ul>
        </motion.div>

        {/* Certification Support */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Organizations seeking certification can benefit from:
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Training programs to build internal capability.</li>
            <li>
              Pre-audit assessments to identify gaps and ensure readiness.
            </li>
            <li>
              Support throughout the certification process, including
              surveillance and renewal audits to maintain compliance.
            </li>
          </ul>
        </motion.div>

        {/* Additional IFS Standards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Additional IFS Standards
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In addition to IFS Food, auditing and certification services are
            available for the following related IFS standards:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>IFS Food Store</li>
            <li>IFS Broker</li>
            <li>IFS Logistics</li>
            <li>IFS Testing Migration Packaging</li>
          </ul>
          <p className="mt-4 text-gray-700 leading-relaxed">
            These standards ensure end-to-end safety and quality controls across
            the full lifecycle of food products—from sourcing and packaging to
            logistics and retail.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IFS;
