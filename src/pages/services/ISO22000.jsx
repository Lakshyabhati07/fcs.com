// src/pages/services/ISO22000.jsx
import React from "react";
import { motion } from "framer-motion";

const ISO22000 = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-lime-50 to-green-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-orange-600 mb-6"
        >
          ISO 22000 Food Safety Management System Certification
        </motion.h1>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          The ISO 22000 Food Safety Management System certification empowers
          organizations—whether directly or indirectly involved in the food
          chain—to identify, assess, and effectively manage food safety risks.
        </motion.p>

        {/* What is ISO 22000 Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            What is ISO 22000?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            ISO 22000 is a globally recognized Food Safety Management System
            standard that addresses every stage of the food supply chain—from
            primary production and manufacturing to storage, distribution, and
            retail. Its scope also extends to producers of inputs, equipment,
            packaging materials, and other entities contributing to the food
            value chain.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The ISO 22000 framework integrates essential elements from existing
            standards, including ISO 9001, Prerequisite Programs (PRPs), and
            HACCP (Hazard Analysis and Critical Control Points). It delivers a
            comprehensive certification solution within a unified structure,
            making it suitable for organizations of all types and sizes.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Designed in alignment with the High Level Structure (HLS), ISO 22000
            emphasizes several core components:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Understanding the context of the organization</li>
            <li>Leadership and strategic direction</li>
            <li>Planning for risk-based thinking</li>
            <li>Adequate support and resources</li>
            <li>Robust operational control</li>
            <li>Continuous performance evaluation and improvement</li>
          </ul>
        </motion.div>

        {/* Key Benefits Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Key Benefits
          </h2>
          <ul className="list-decimal list-inside text-gray-700 space-y-2 leading-relaxed">
            <li>Promotes Food Safety and Quality.</li>
            <li>
              By gaining certification, organizations gain recognition for their
              ongoing commitment to food safety, prove their integrity to the
              market, and enhance consumer confidence in their brand.
            </li>
            <li>
              Understands the actual risks for the consumers and for the
              organization.
            </li>
            <li>
              Helps meet food safety legal compliance and corporate requirements.
            </li>
            <li>
              Pro-actively improves processes saving valuable time and resources.
            </li>
            <li>Demonstrates due diligence in food safety.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ISO22000;
