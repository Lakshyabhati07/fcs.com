// src/pages/services/ISO22716.jsx
import React from "react";
import { motion } from "framer-motion";

const ISO22716 = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-pink-50 to-pink-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <motion.h1
          className="text-3xl font-bold text-pink-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ISO 22716: Good Manufacturing Practices for the Cosmetics Industry
        </motion.h1>

        {/* Intro */}
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          ISO 22716 is an internationally recognized standard that outlines Good Manufacturing
          Practices (GMP) specifically for the cosmetics manufacturing industry. It establishes the
          foundational principles for applying GMP within facilities that produce finished cosmetic
          products. The purpose of ISO 22716 certification is to strengthen the safety of cosmetic
          products through clearly defined GMP requirements implemented across every stage of the
          supply chain.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          This standard ensures that all recommended GMP guidelines for cosmetics are met during the
          production, control, storage, and shipment processes. By providing practical methods for
          managing a quality system, ISO 22716 supports organizations in maintaining consistent
          quality throughout their operations.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          ISO 22716 applies to manufacturing, storage, packaging, testing, and transportation
          activities related to cosmetic products. It does not extend to research and development
          functions or the distribution of finished products. Although the primary focus is on
          product quality, the standard does not address employee safety or environmental
          protection. Despite these exclusions, ISO 22716 has been approved and accepted by multiple
          regulatory authorities worldwide, including the U.S. Food and Drug Administration (FDA),
          the International Cooperation on Cosmetics Regulation (ICCR), and the European Committee
          for Standardisation (CEN).
        </motion.p>

        {/* Organizational Benefits */}
        <motion.h2
          className="text-2xl font-semibold text-pink-600 mt-8 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Organizational Benefits of ISO 22716 Certification
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          The ISO 22716 standard helps integrate the essential requirements for product and process
          quality across cosmetic manufacturing operations. It enables organizations to effectively
          manage quality and safety standards throughout the supply chain, while identifying and
          controlling hazards and risks associated with cosmetic products. The standard promotes
          continuous improvement and is adaptable for companies of any size and operational
          complexity. In addition, it supports organizations in meeting legal and regulatory
          compliance requirements with ease and reliability.
        </motion.p>

        {/* Why Choose Us */}
        <motion.h2
          className="text-2xl font-semibold text-pink-600 mt-8 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Why Choose Us for ISO 22716 Certification
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          We offer a consolidated solution for all critical quality management system audits in the
          cosmetics sector. Our team brings a high level of technical expertise and years of
          experience in the industry. With a wide-reaching presence across India, we maintain strong
          personal contact with clients and ensure a high degree of customer focus. Our support
          extends well beyond the certification process, fostering long-term relationships built on
          trust, service, and quality assurance.
        </motion.p>
      </div>
    </section>
  );
};

export default ISO22716;
