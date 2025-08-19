// src/pages/services/GDP.jsx
import React from "react";
import { motion } from "framer-motion";

const GDP = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-blue-50 to-sky-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <motion.h1
          className="text-3xl font-bold text-blue-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          GDP Certificates and Compliance in Pharmaceutical Distribution
        </motion.h1>

        {/* Introduction */}
        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          GDP (Good Distribution Practice) certificates and statements of non-compliance may be
          issued to wholesale distributors of medicinal products, as well as to distributors of
          active substances. These certifications play a critical role in maintaining the quality
          and integrity of pharmaceutical products throughout the supply chain.
        </motion.p>

        {/* What is GDP Certificate */}
        <motion.h2
          className="text-2xl font-semibold text-blue-600 mt-6 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          What is a GDP Certificate?
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          A Good Distribution Practices (GDP) certificate signifies that pharmaceutical product
          handlers meet the rigorous safety and security standards outlined by the World Health
          Organization (WHO). Although not a universal requirement, compliance with GDP guidelines
          is mandatory for pharmaceutical companies and logistics partners operating within the
          European Union.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          GDP is a key component of quality assurance, ensuring that pharmaceutical products are
          consistently stored, transported, and handled under conditions appropriate to their
          marketing authorization (MA) or product specification. The guidelines apply not only to
          wholesalers and manufacturers, but also include specific provisions for brokers dealing
          in pharmaceutical products. Responsibility for the product’s quality remains with the
          manufacturer until the point of sale, at which stage wholesale dealers assume ownership.
        </motion.p>

        {/* Typical GDP Standards */}
        <motion.h2
          className="text-2xl font-semibold text-blue-600 mt-6 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Typical GDP Standards
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Several recognized frameworks form the foundation for GDP compliance. These include the EU
          GDP Guidelines (2013/C 343/01), the United States Pharmacopeia USP 1079, and the World
          Health Organization’s GDP standards outlined in TRS 957 Annex 5.
        </motion.p>

        {/* Support for Achieving GDP Compliance */}
        <motion.h2
          className="text-2xl font-semibold text-blue-600 mt-6 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Support for Achieving GDP Compliance
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          As a trusted partner in the pharmaceutical industry, we offer a complete range of services
          that span the entire pharmaceutical supply chain. With deep expertise in quality and
          safety management and Good Distribution Practices (GDP), we provide consulting,
          certification, and training solutions across a global network. This enables
          pharmaceutical organizations to navigate the complex and dynamic regulatory landscape with
          consistency and confidence.
        </motion.p>

        {/* Value of WHO GDP Certification */}
        <motion.h2
          className="text-2xl font-semibold text-blue-600 mt-6 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Value of WHO GDP Certification
        </motion.h2>
        <motion.p
          className="text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          Certification under the World Health Organization’s GDP framework helps organizations
          clearly identify relevant GDP specifications, address deficiencies proactively before
          regulatory or funding body inspections, and ensure that drug products are handled in full
          compliance with WHO GDP standards and requirements.
        </motion.p>
      </div>
    </section>
  );
};

export default GDP;
