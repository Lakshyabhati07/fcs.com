// src/pages/services/GapAnalysis.jsx
import React from "react";
import { motion } from "framer-motion";

const GapAnalysis = () => {
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
          Gap Analysis in Food Safety
        </motion.h1>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          In the food safety world, the margin for error is razor thin. One small
          oversight—whether in compliance, training, or traceability—can lead to
          recalls, reputational damage, or public health crises. Yet many food
          businesses struggle to pinpoint where their systems fall short until
          it’s too late. <span className="font-semibold">This is where gap analysis becomes invaluable.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-700 text-base mb-8 leading-relaxed"
        >
          By offering a straightforward method to evaluate current operations
          against regulatory or performance standards, gap analysis helps food
          safety professionals uncover blind spots, prioritize risks, and take
          focused action. This approach ensures your facility stays{" "}
          <span className="font-semibold">compliant, competitive, and consumer safe.</span>
        </motion.p>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Introduction to Gap Analysis
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Gap analysis helps companies identify the space between their current
            performance and future goals. Businesses analyze internal and
            external factors that influence performance to understand their
            current position and the path forward. Tools like{" "}
            <span className="font-semibold">SWOT</span> and{" "}
            <span className="font-semibold">PEST analysis</span> can further
            enhance the findings.
          </p>
        </motion.div>

        {/* Understanding Current State */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Understanding the Current State
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Your current state shows how your business performs right now. It
            involves evaluating customer feedback, financial records, and market
            share. Data must be collected from surveys, benchmarks, and reports
            to highlight strengths and expose weaknesses.
          </p>
        </motion.div>

        {/* When to Conduct Gap Analysis */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            When Should You Conduct a Gap Analysis?
          </h2>
          <p className="text-gray-700 mb-3 leading-relaxed">
            Gap analysis is most useful during periods of transition or
            performance concerns, such as:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Launching a new product or service</li>
            <li>Preparing for audits or strategy shifts</li>
            <li>Rebranding or restructuring</li>
            <li>Facing stagnation or performance decline</li>
          </ul>
          <p className="text-gray-700 mt-2 leading-relaxed">
            Choose times when sufficient data is available and leadership is
            ready to act.
          </p>
        </motion.div>

        {/* Defining Desired States */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Defining Desired States
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The desired state defines what the business wants to achieve, such as
            better customer satisfaction or higher profits. Goals should be:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
            <li>Clear, specific, and realistic</li>
            <li>Measurable and aligned with business priorities</li>
            <li>Considerate of internal and external factors</li>
          </ul>
          <p className="text-gray-700 mt-2 leading-relaxed">
            Example: A food packaging company aiming to reduce contamination
            complaints by 40% sets a clear, actionable target.
          </p>
        </motion.div>

        {/* Types of Gap Analysis */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Types of Gap Analyses
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <span className="font-semibold">Strategic gap analysis:</span>{" "}
              Alignment with long-term goals.
            </li>
            <li>
              <span className="font-semibold">Performance gap analysis:</span>{" "}
              Focus on underperforming areas.
            </li>
            <li>
              <span className="font-semibold">Market gap analysis:</span> Unmet
              customer needs and opportunities.
            </li>
            <li>
              <span className="font-semibold">Skills gap analysis:</span>{" "}
              Training or hiring requirements.
            </li>
            <li>
              <span className="font-semibold">Compliance gap analysis:</span>{" "}
              Legal or regulatory readiness.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default GapAnalysis;
