// src/pages/services/IATF16949.jsx
import React from "react";
import { motion } from "framer-motion";

const IATF16949 = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-gray-50 to-blue-100 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-blue-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          IATF 16949 – Automotive Quality Management System Certification
        </motion.h1>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          IATF 16949 defines the requirements for a quality management system
          specifically tailored to the automotive production industry. Developed
          to unify global automotive quality standards, this standard was
          officially published in October 2016 and replaced the now-obsolete
          ISO/TS 16949.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          IATF 16949 integrates key quality management principles and addresses
          several critical areas, including:
        </motion.p>

        <motion.ul
          className="list-disc pl-6 mb-4 text-gray-700 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <li>Product safety</li>
          <li>Risk management and contingency planning</li>
          <li>Embedded software requirements</li>
          <li>Change and warranty management</li>
          <li>Management of sub-tier suppliers</li>
        </motion.ul>

        <motion.h2
          className="text-2xl font-semibold text-blue-600 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Significance of IATF 16949 Certification
        </motion.h2>

        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Achieving IATF 16949 certification signals that an organization has
          established a robust quality management system focused on continuous
          improvement, defect prevention, and reduction of process variation and
          waste across the automotive supply chain. The technical specification
          applies to manufacturers and suppliers involved in the production of
          automotive parts, raw materials, heat treatment, galvanizing, and
          other processes or components required by automotive OEMs.
        </motion.p>

        <motion.p
          className="mt-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Certification to this standard is widely recognized by major
          automotive manufacturers. Most leading OEMs require their suppliers to
          hold IATF 16949 certification as a prerequisite for doing business,
          ensuring adherence to rigorous quality and technical standards.
        </motion.p>
      </div>
    </section>
  );
};

export default IATF16949;
