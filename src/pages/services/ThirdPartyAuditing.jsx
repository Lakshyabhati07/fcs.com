// src/pages/services/ThirdPartyAuditing.jsx
import React from "react";
import { motion } from "framer-motion";

const ThirdPartyAuditing = () => {
  return (
    <section className="min-h-screen py-16 px-6 bg-gradient-to-br from-white via-lime-50 to-green-100">
      <div className="max-w-5xl mx-auto text-justify">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-orange-600 mb-6"
        >
          Third Party Auditing
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          FSSAI believes in the strategy of{" "}
          <span className="font-semibold text-green-800">
            ‘Maximum Governance, Minimum Government’.
          </span>{" "}
          In order to cultivate and foster the growth of self-compliance
          culture, FSSAI enables compliance through recognized private auditing
          agencies. The{" "}
          <span className="italic">
            Food Safety and Standards (Food Safety Auditing) Regulations, 2018
          </span>{" "}
          were notified on 28th August 2018 for this purpose.
        </motion.p>

        {/* Importance of Third Party Auditing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Why Third Party Auditing?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Food Safety Audits aim to strengthen the food safety surveillance
            system and encourage food businesses to take ownership of their
            compliance efforts. By involving independent, recognized auditing
            agencies, the regulatory burden on licensing authorities is reduced.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <span className="font-semibold">Reduced Regulatory Inspections:</span>{" "}
              Satisfactory audits minimize the frequency of inspections by
              central or state authorities (excluding regulatory sampling).
            </li>
            <li>
              <span className="font-semibold">Enhanced Self-Compliance:</span>{" "}
              Businesses are encouraged to maintain higher hygiene and safety
              standards.
            </li>
            <li>
              <span className="font-semibold">Consumer Safety Assurance:</span>{" "}
              A stronger audit system leads to improved consumer confidence and
              safer food practices.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ThirdPartyAuditing;
