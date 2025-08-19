// src/pages/services/InternalAudits.jsx
import React from "react";
import { motion } from "framer-motion";

const InternalAudits = () => {
  return (
    <section className="min-h-screen py-16 px-6 bg-gradient-to-br from-white via-lime-50 to-green-100">
      <div className="max-w-5xl mx-auto text-justify">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-orange-600 mb-6"
        >
          Internal Auditing in the Food Industry
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          Internal auditing in the food industry is a systematic examination of
          a company’s <span className="font-medium">Quality Management System (QMS)</span> 
          and related processes, procedures, and controls. These audits are 
          conducted by internal auditors who are independent of the areas being audited.
        </motion.p>

        {/* Why Audits Are Important */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Why Are Internal Audits Important?
          </h2>

          {/* Compliance Assurance */}
          <div className="mb-6">
            <h3 className="text-xl font-medium text-orange-500 mb-2">
              Compliance Assurance
            </h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Internal audits ensure that your food safety practices and procedures 
              comply with regulatory requirements, industry standards, and certifications such as:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>HACCP (Hazard Analysis and Critical Control Points)</li>
              <li>GMPs (Good Manufacturing Practices)</li>
              <li>GFSI-recognized standards</li>
              <li>ISO 9001 / ISO 22000</li>
            </ul>
          </div>

          {/* Risk Management */}
          <div className="mb-6">
            <h3 className="text-xl font-medium text-orange-500 mb-2">
              Risk Management
            </h3>
            <p className="text-gray-700 leading-relaxed">
              By systematically examining processes and controls, internal audits 
              help identify potential risks and vulnerabilities. This allows for 
              implementing corrective actions and preventive measures to 
              <span className="font-medium"> mitigate risks and prevent food safety incidents.</span>
            </p>
          </div>

          {/* Continuous Improvement */}
          <div className="mb-6">
            <h3 className="text-xl font-medium text-orange-500 mb-2">
              Continuous Improvement
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Audits provide valuable feedback on the effectiveness of the QMS. 
              They highlight inefficiencies and opportunities for optimization, 
              leading to <span className="font-medium">continuous improvement in food safety performance.</span>
            </p>
          </div>

          {/* Quality Assurance */}
          <div className="mb-6">
            <h3 className="text-xl font-medium text-orange-500 mb-2">
              Quality Assurance
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Internal audits verify that quality control measures are 
              <span className="font-medium"> effective in maintaining product integrity </span> 
              and meeting customer expectations.
            </p>
          </div>

          {/* Supplier Audits */}
          <div className="mb-6">
            <h3 className="text-xl font-medium text-orange-500 mb-2">
              Supplier Audits
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Audits may also evaluate suppliers and vendors to ensure they meet 
              food safety requirements. This helps maintain the integrity of the 
              supply chain and <span className="font-medium">reduce risks of contamination.</span>
            </p>
          </div>

          {/* Management Oversight */}
          <div>
            <h3 className="text-xl font-medium text-orange-500 mb-2">
              Management Oversight & Accountability
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Internal audits give management confidence that food safety risks 
              are being effectively managed, and they promote accountability 
              among employees and leadership.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InternalAudits;
