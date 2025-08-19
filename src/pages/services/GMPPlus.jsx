// src/pages/services/GMPPlus.jsx
import React from "react";
import { motion } from "framer-motion";

const GMPPlus = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-green-50 to-emerald-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-green-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          GMP+ FSA, FAMI-QS, and FSSC 22000 Certification for Animal Feed & Ingredients
        </motion.h1>

        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          The GMP+ FSA, FAMI-QS, and FSSC 22000 certifications for animal feed and ingredients 
          are designed to improve how organizations identify and manage food safety risks while 
          ensuring consistent delivery of safe and high-quality products. Certification of your 
          animal feed and ingredient safety management system demonstrates your commitment to a 
          sustainable and secure food chain, continuous improvement, and customer satisfaction. 
          These tangible business benefits contribute to building transparency in business 
          operations and strengthening consumer confidence.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-green-600 mt-6 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Overview of Standards
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          GMP+ FSA, FAMI-QS, and FSSC 22000 are three independent but related standards that 
          lay out essential requirements for ensuring feed safety and the quality of products 
          manufactured through various processes. Applicable to any feed manufacturer, these 
          standards are based on core quality assurance principles such as regulatory 
          compliance, responsible ingredient sourcing, leadership commitment, process-based 
          thinking, and continual improvement. Each of them requires feed safety hazards to be 
          identified and documented, along with the appropriate control measures, in line with 
          HACCP (Hazard Analysis and Critical Control Points) principles.
        </motion.p>

        <motion.h3
          className="text-xl font-semibold text-green-600 mt-5 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          GMP+ Feed Safety Assurance (FSA)
        </motion.h3>
        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          The GMP+ Feed Safety Assurance (FSA) module was developed by GMP+ International B.V., 
          formerly the Dutch Animal Feed Board (PDV). It offers a complete system for assuring 
          feed safety across the entire feed chain. Designed based on real-world needs, the GMP+ 
          FSA module integrates elements from ISO 9001 (quality management), HACCP, traceability 
          systems, monitoring practices, prerequisite programs, chain-of-custody models, and 
          early warning mechanisms. Laboratories conducting analysis under this system may also 
          be certified or registered, further ensuring trust in results.
        </motion.p>

        <motion.h3
          className="text-xl font-semibold text-green-600 mt-5 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          FAMI-QS
        </motion.h3>
        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          FAMI-QS is a global quality and feed safety management system tailored to the specialty 
          feed ingredients sector. Its Code outlines the requirements necessary to ensure feed 
          safety and product quality for ingredients made through chemical, biotechnological, 
          mining, extraction, mixing, and formulation processes. The system is supported by 
          dedicated HACCP plans and aligns with the ISO High-Level Structure, ISO/TS 22002 – Part 
          6, and FSMA CGMP requirements for animal food.
        </motion.p>

        <motion.h3
          className="text-xl font-semibold text-green-600 mt-5 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          FSSC 22000 for Feed Safety
        </motion.h3>
        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          FSSC 22000, developed by the Foundation for Food Safety Certification, is another 
          robust certification scheme that includes a specific module for feed safety. It is 
          based on the ISO 22000 standard and follows the ISO High-Level Structure, incorporating 
          prerequisite programs detailed in ISO/TS 22002-6 for animal feed, along with the core 
          principles of HACCP.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-green-600 mt-6 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          Benefits of Certification
        </motion.h2>
        <motion.p
          className="text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Achieving any of these certifications allows a company to demonstrate that its animal 
          feeds and feed ingredients comply with legal standards and with requirements agreed 
          upon by partners in the supply chain. It helps build internal and external trust in 
          system performance, assures customers that feed products are produced through safe and 
          controlled processes, and provides evidence that all necessary precautions have been 
          taken. Moreover, certification allows buyers, especially those in countries with strict 
          feed safety laws, to demand verification and supplier assessments, ultimately reducing 
          the number of customer audits and saving both time and cost for the organization.
        </motion.p>
      </div>
    </section>
  );
};

export default GMPPlus;
