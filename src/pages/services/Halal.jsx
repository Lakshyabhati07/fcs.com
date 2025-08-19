// src/pages/services/HALAL.jsx
import React from "react";
import { motion } from "framer-motion";

const HALAL = () => {
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
          HALAL Certification – Overview
        </motion.h1>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          Halal refers to what is permitted and lawful under Islamic law. In the
          context of food, it signifies items that Muslims are allowed to
          consume. Finding genuine halal food products, particularly outside
          Muslim-majority countries, can be challenging. Even in these countries,
          processed foods often contain non-halal ingredients due to a lack of
          awareness among manufacturers and processors.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          HALAL is an internationally recognized standard that provides a robust
          framework for establishing halal sharia compliance, along with
          essential food safety requirements such as personal hygiene, GMPs,
          infrastructure, and internal audits. While voluntary, halal
          certification is widely requested by international corporations and
          retailers, and is strongly encouraged by governments for market access.
        </motion.p>

        {/* Certification Process */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            HALAL Certification Process
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The certification process begins with a gap analysis conducted by
            quality system experts to assess documentation, traceability,
            ingredient verification, and legal compliance. Organizations then
            implement corrective actions and prepare for audits.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            A two-stage initial audit is performed by the certification body. Upon
            successful completion, a certificate valid for one year is issued.
            During the three-year certification cycle, two surveillance audits
            (one per year) are conducted, followed by a re-audit to renew
            certification. Continuous adherence to halal standards is essential
            for maintaining validity.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Benefits of Halal Certification
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>
              Opens access to halal-certified product markets, including over 8
              million consumers in the USA.
            </li>
            <li>
              Ensures the implementation of a sustainable food safety management
              system.
            </li>
            <li>
              Builds trust and confidence among Muslim consumers.
            </li>
            <li>
              Offers a competitive edge for companies registering as retail
              vendors.
            </li>
            <li>
              Enhances brand reputation and strengthens customer acquisition.
            </li>
            <li>
              Printing the halal-certified logo on product packaging increases
              credibility and market access.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default HALAL;
