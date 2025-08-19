// src/pages/services/BRCGS.jsx

import { motion } from "framer-motion";

const BRCGS = () => {
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
          BRCGS Global Standards – Overview
        </motion.h1>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          The BRCGS (Brand Reputation Compliance Global Standards) comprise a
          comprehensive set of globally recognized technical standards, developed
          in response to the needs of UK retailers and now widely adopted by
          international suppliers and retailers. These standards help ensure the
          standardization of quality, safety, and operational criteria, and
          confirm manufacturers’ adherence to legal requirements while offering
          protection to consumers.
        </motion.p>

        {/* Key Standards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Key BRCGS Global Standards
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>BRCGS Global Standard for Food</li>
            <li>BRCGS Global Standard for Packaging & Packaging Materials</li>
            <li>BRCGS Global Standard for Consumer Products</li>
            <li>BRCGS Global Standard for Storage & Distribution</li>
            <li>BRCGS Global Standard for Agents & Brokers</li>
          </ul>
          <p className="mt-4 text-gray-700 leading-relaxed">
            These standards are widely used to guide the safe production,
            packaging, storage, and distribution of food and consumer goods.
            Implementation typically requires formal BRCGS training within the
            organization.
          </p>
        </motion.div>

        {/* Recognition and Industry Value */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Recognition and Industry Value
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Recognized by the Global Food Safety Initiative (GFSI), BRCGS aligns
            with global efforts to harmonize food safety standards.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The Global Standard for Food Safety focuses on two critical pillars:
            senior management commitment and a structured HACCP-based food safety
            plan.
          </p>
        </motion.div>

        {/* Additional Modules */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Additional Modules and Their Benefits
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Optional additional modules can be audited alongside the primary BRCGS
            standards during the annual audit. These offer further value:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Demonstrate a site’s commitment to sustainability in managing and
              controlling losses of plastic pellets, granules, flakes, powders,
              dust, and offcuts.
            </li>
            <li>
              Certification validates compliance and allows the site to display an
              official certificate reflecting this achievement.
            </li>
            <li>
              Supports alignment with various industry sustainability initiatives,
              particularly in reducing plastic pellet loss.
            </li>
          </ul>
          <p className="mt-4 text-gray-700 font-semibold">
            Module 13 – Food Safety Modernization Act (FSMA):
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
            <li>
              Specifically developed to help facilities prepare for compliance with
              the Preventive Controls section of the U.S. FSMA.
            </li>
            <li>
              Provides verification and assurance to customers, particularly
              U.S.-based partners.
            </li>
            <li>
              An essential tool for organizations currently doing business or
              planning to engage with the U.S. food market.
            </li>
          </ul>
        </motion.div>

        {/* Fundamental Requirements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Fundamental Requirements of BRCGS – Food Safety Standard
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>A structured HACCP (Hazard Analysis and Critical Control Points) food safety plan.</li>
            <li>Management commitment with adequate allocation of resources.</li>
            <li>A documented quality management system outlining organizational policies.</li>
            <li>Implementation of pre-requisite programs to ensure suitable environmental and operational conditions.</li>
          </ul>
        </motion.div>

        {/* Documentation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Documentation and Other Key Requirements
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Food Safety Policy and associated objectives.</li>
            <li>A comprehensive Food Safety Manual and HACCP Plan.</li>
            <li>Defined pre-requisite programs.</li>
            <li>Clearly documented procedures and work instructions.</li>
            <li>Essential records and documents to support effective system implementation.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default BRCGS;
