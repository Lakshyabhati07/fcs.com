// src/pages/services/Sedex_SMETA.jsx
import React from "react";
import { motion } from "framer-motion";

const Sedex_SMETA = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-purple-50 to-purple-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h1
          className="text-3xl font-bold text-purple-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sedex and SMETA: Advancing Ethical Business Practices in Global Supply Chains
        </motion.h1>

        {/* Paragraph 1 */}
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          The Supplier Ethical Data Exchange (Sedex) is a global, not-for-profit membership
          organization dedicated to promoting responsible and ethical business practices
          within supply chains. Established in 2001 by a consortium of retailers, Sedex was
          created to harmonize social audit standards and reduce the duplication of efforts
          through the sharing of audit reports. Its core mission is to support buyers and
          suppliers in enhancing ethical performance while alleviating the audit burden on
          suppliers. By enabling transparency and collaboration, Sedex plays a vital role
          in elevating supply chain standards worldwide.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          One of Sedex’s key contributions is the development of SMETA—the Sedex Members
          Ethical Trade Audit. SMETA is a comprehensive audit methodology designed and
          maintained by Sedex members to provide a consistent, centralized audit protocol
          that can be confidently shared across the network. It has become the most widely
          accepted ethical audit methodology globally. Its broad adoption by brands,
          retailers, and supply chain partners has made SMETA the preferred audit protocol
          among producers, manufacturers, processors, and growers across diverse
          industries.
        </motion.p>

        {/* Paragraph 3 */}
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Only audit firms with a Sedex Affiliate Auditor account are authorized to perform
          SMETA audits and fully utilize the features and tools of the Sedex platform. In
          addition, firms must be members of the Association of Professional Social
          Compliance Auditors (APSCA) to be eligible for recognition as a Sedex Affiliated
          Audit Company. This ensures that audits are conducted to the highest professional
          and ethical standards.
        </motion.p>

        {/* Paragraph 4 */}
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          With more than two decades of experience in Corporate Social Responsibility
          (CSR) auditing, we specialize in delivering credible and consistent audits across
          major sourcing regions and high-risk countries. Our longstanding commitment to
          ethical compliance and global supply chain accountability enables organizations
          to meet stakeholder expectations and regulatory demands while building lasting
          trust and integrity in their operations.
        </motion.p>
      </div>
    </section>
  );
};

export default Sedex_SMETA;
