// src/pages/services/FSSC22000.jsx

import { motion } from "framer-motion";

const FSSC22000 = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-lime-50 to-green-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-orange-600 mb-6"
        >
          FSSC 22000 Food Safety Systems Certification and Auditing
        </motion.h1>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          FSSC 22000 certification and auditing services enable organizations
          to confidently market their food products by demonstrating robust food
          safety management practices.
        </motion.p>

        {/* What is FSSC 22000 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-gray-700 mb-4 leading-relaxed">
            FSSC 22000 is a Global Food Safety Initiative (GFSI) benchmarked food
            safety standard. It is based on the internationally recognized ISO
            22000 Food Safety Management System, relevant Pre-Requisite Programs
            (PRPs), and additional requirements defined by FSSC.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A wide range of FSSC 22000 services, including auditing and
            certification, are available to support compliance with GFSI standards
            and ensure alignment with internationally accepted food safety
            requirements.
          </p>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Key Benefits
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4 leading-relaxed">
            <li>
              <span className="font-semibold">Recognition for Your Commitment:</span> Gain recognition for food safety, continuous
              improvement of the food safety system, and its performance.
            </li>
            <li>
              <span className="font-semibold">Audit Fatigue Reduction:</span> As FSSC 22000 is ISO-based, it allows integration with
              other ISO standards through combined audits, reducing the number of
              audits required.
            </li>
            <li>
              <span className="font-semibold">Increase Customer Confidence:</span> FSSC 22000 is GFSI benchmarked and accepted by major
              brands and retailers, enhancing your reputation and giving customers
              confidence in your production and supply chain management system.
            </li>
            <li>
              <span className="font-semibold">Consider FSSC-Q:</span> Combines the requirements of FSSC with ISO 9001:2015 into one
              overall management system audit.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default FSSC22000;
