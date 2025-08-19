// src/pages/services/HACCP.jsx
import React from "react";
import { motion } from "framer-motion";

const HACCP = () => {
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
          HACCP – Hazard Analysis and Critical Control Points
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          HACCP (Hazard Analysis and Critical Control Points) is a vital food
          safety system required for compliance with national and international
          food safety regulations. It applies to food businesses involved in
          preparation, processing, packaging, storage, transportation, and
          distribution of food products, ensuring proactive hazard control.
        </motion.p>

        {/* System Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-gray-700 leading-relaxed">
            HACCP complements food safety standards like ISO 22000 by enabling
            organizations to identify hazards and implement effective controls
            across the food supply chain.
          </p>
        </motion.div>

        {/* Regulatory Framework */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Regulatory Framework & Global Guidelines
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            EU Directive 93/43/EEC mandates HACCP-based systems for food
            operators. The Codex Alimentarius Commission outlines the steps and
            seven HACCP principles in{" "}
            <span className="italic">
              "Requirements for a HACCP-Based Food Safety System."
            </span>
          </p>
        </motion.div>

        {/* Structure and Scope */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Structure of Codex HACCP Guidelines
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The 2023 guidelines (annexed to the General Principles of Food
            Hygiene, CXC 1-1969) are built around the{" "}
            <span className="font-semibold">Seven Principles of HACCP</span>,
            implemented via a systematic 12-step approach.
          </p>

          {/* Seven Principles */}
          <div className="bg-white shadow-md rounded-lg p-5 mb-6 border border-orange-200">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">
              The 7 Principles of HACCP
            </h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Conduct a hazard analysis.</li>
              <li>Determine the Critical Control Points (CCPs).</li>
              <li>Establish critical limits for each CCP.</li>
              <li>Establish monitoring procedures.</li>
              <li>Establish corrective actions.</li>
              <li>Establish verification procedures.</li>
              <li>
                Establish record-keeping and documentation procedures.
              </li>
            </ol>
          </div>

          {/* 12 Steps */}
          <div className="bg-orange-50 shadow-md rounded-lg p-5 mb-6 border border-orange-200">
            <h3 className="text-xl font-semibold text-green-700 mb-4">
              The 12 Steps for Applying HACCP
            </h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Assemble the HACCP team.</li>
              <li>Describe the food and its distribution.</li>
              <li>Identify intended use and consumers.</li>
              <li>Develop a process flow diagram.</li>
              <li>Verify the process flow diagram.</li>
              <li>Conduct hazard analysis (Principle 1).</li>
              <li>Determine Critical Control Points (CCPs) (Principle 2).</li>
              <li>Set critical limits (Principle 3).</li>
              <li>Establish monitoring procedures (Principle 4).</li>
              <li>Establish corrective actions (Principle 5).</li>
              <li>Establish verification procedures (Principle 6).</li>
              <li>Establish documentation & record-keeping (Principle 7).</li>
            </ol>
          </div>

          {/* Scope */}
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Scope of Codex HACCP Guidelines
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The HACCP guidelines apply across the entire food chain — from
            primary production to final consumption — addressing biological,
            chemical, and physical hazards.
          </p>
          <div className="bg-green-50 shadow-md rounded-lg p-5 border border-green-200">
            <h3 className="text-xl font-semibold text-green-700 mb-4">
              Key Updates in 2023
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Food Safety Culture:</strong> Promoting a positive food
                safety culture among Food Business Operators.
              </li>
              <li>
                <strong>Good Hygiene Practices (GHPs):</strong> Updated
                guidelines for effective GHP implementation.
              </li>
              <li>
                <strong>CCP Decision Tree:</strong> A revised CCP decision tree
                for accurate determination.
              </li>
              <li>
                <strong>Validation & Verification:</strong> Emphasis on control
                measure validation and regular system verification.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HACCP;
