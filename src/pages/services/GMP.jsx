// src/pages/services/GMP.jsx
import React from "react";
import { motion } from "framer-motion";

const GMP = () => {
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
          GMP Certification – Good Manufacturing Practices
        </motion.h1>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          GMP (Good Manufacturing Practices) certification is a pre-requisite for
          achieving HACCP certification. It addresses fundamental aspects of the
          food chain, including production practices, hygiene, and facility
          maintenance, serving as the foundation for implementing comprehensive
          food safety systems.
        </motion.p>

        {/* What is GMP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            What is GMP?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Codex-based GMP Certification is widely recognized as the initial
            step toward food safety compliance. For any organization seeking to
            implement food safety standards, meeting Pre-Requisite Program (PRP)
            requirements—also referred to as GMP requirements—is essential. These
            basic hygiene and operational conditions create the groundwork for
            developing more advanced food safety management systems such as HACCP
            and ISO 22000.
          </p>
        </motion.div>

        {/* How to Obtain Certification */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            How to Obtain Codex GMP Certification
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Organizations pursuing Codex GMP certification must complete a formal
            application and contract process. Certification is granted following
            an initial or re-certification audit, and the certificate is typically
            valid for three years. To maintain certification, surveillance audits
            are conducted at scheduled intervals throughout the certification
            cycle.
          </p>
        </motion.div>

        {/* Scope of Codex GMP Guidelines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Scope of Codex GMP Guidelines
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Implementation of GMP provides a strong framework of pre-requisite
            programs that support food safety systems. The guidelines cover
            critical operational areas such as construction and layout of
            buildings, workspace and premises design, utility management
            (including air, water, and energy), and effective waste disposal.
            They also include equipment suitability, cleaning and maintenance,
            control of purchased materials, and cross-contamination prevention.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Additional requirements address cleaning and sanitizing procedures,
            pest control, personal hygiene, employee facilities, rework handling,
            product recall processes, warehousing practices, consumer information
            and awareness, as well as food defense measures including
            biovigilance and protection against bioterrorism.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GMP;
