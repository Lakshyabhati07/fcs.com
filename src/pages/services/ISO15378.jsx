// src/pages/services/ISO15378.jsx
import React from "react";
import { motion } from "framer-motion";

const ISO15378 = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-green-50 to-emerald-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <motion.h1
          className="text-3xl font-bold text-emerald-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ISO 15378: Quality Management for Primary Packaging Materials of Medicinal Products
        </motion.h1>

        {/* Introduction */}
        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          ISO 15378 is an international standard that outlines specific requirements for the
          application of ISO 9001:2015 in the context of Good Manufacturing Practices (GMP) for
          primary packaging materials used in medicinal products. The standard is intended for
          organizations that must demonstrate their ability to consistently supply primary packaging
          materials that meet both customer and regulatory requirements, as well as relevant
          international standards.
        </motion.p>

        {/* Primary Packaging Section */}
        <motion.h2
          className="text-2xl font-semibold text-emerald-600 mt-6 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Understanding Primary Packaging Materials
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Primary packaging refers to the materials that come into direct contact with the medicinal
          product. Also known as consumer or retail packaging, its primary function is to protect,
          preserve, contain, and provide essential information about the product to the consumer.
          Because these materials interact directly with the product, they are classified as critical
          raw materials in pharmaceutical manufacturing and must be strictly monitored. ISO 15378
          offers a comprehensive framework that enables organizations to prove their capability to
          supply high-quality, compliant packaging materials that adhere to strict regulatory
          expectations and international best practices.
        </motion.p>

        {/* Benefits Section */}
        <motion.h2
          className="text-2xl font-semibold text-emerald-600 mt-6 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Benefits of ISO 15378 Certification
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Certification to ISO 15378 helps organizations implement robust risk management by
          identifying, controlling, and mitigating risks within the production of primary packaging
          materials. It provides clear evidence of adherence to quality, manufacturing, and safety
          standards. Because the standard is aligned with ISO 9001, it allows certified companies to
          efficiently implement a recognized quality management system while meeting additional
          GMP-specific requirements.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          This certification also strengthens brand protection by demonstrating a company’s
          commitment to quality to both the public and stakeholders. It supports regulatory
          compliance by aligning operations with legal and industry-specific requirements.
          Furthermore, ISO 15378 focuses on client satisfaction by facilitating continuous
          improvement and ensuring the consistent fulfillment of client expectations.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          A key feature of this standard is its integration of GMP principles, ensuring that the
          packaging materials used for medicines meet the highest standards of safety and
          effectiveness.
        </motion.p>

        {/* Expert Support */}
        <motion.h2
          className="text-2xl font-semibold text-emerald-600 mt-6 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Expert Support for ISO 15378 Certification
        </motion.h2>
        <motion.p
          className="text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          With extensive experience supporting organizations in regulated industries, we help
          companies optimize their processes, enhance compliance efforts, and implement ISO 15378
          effectively. For professional guidance on achieving certification and aligning with global
          quality expectations, our expert support is available to help you meet the requirements
          and maintain excellence in pharmaceutical packaging standards.
        </motion.p>
      </div>
    </section>
  );
};

export default ISO15378;
