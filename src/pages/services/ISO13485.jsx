// src/pages/services/ISO13485.jsx
import React from "react";
import { motion } from "framer-motion";

const ISO13485 = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h1
          className="text-3xl font-bold text-blue-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Medical Industry and the Importance of Quality Standards
        </motion.h1>

        {/* Intro */}
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          The medical industry is recognized as one of the most sensitive and highly regulated
          sectors. Any organization entering this domain must comply with strict regulatory
          requirements to ensure safety and reliability. Given that healthcare professionals rely
          heavily on medical devices for the diagnosis, prevention, and treatment of patients, the
          quality of these devices is of paramount importance. High-quality standards are essential
          not only for patient safety but also to instill confidence among customers, stakeholders,
          and healthcare providers.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          To achieve this, medical device manufacturers must adhere to established quality systems,
          such as the ISO 13485 certification. This internationally recognized standard ensures
          that medical devices are consistently safe, functional, and reliable. While ISO 13485 does
          not prescribe specific technical requirements, it confirms that manufacturers implement
          and maintain quality processes throughout every stage of production, from design and
          development to installation, delivery, and disposal. The certification serves as a
          testament that all processes are managed under a robust quality management system.
        </motion.p>

        {/* Definition of a Medical Device */}
        <motion.h2
          className="text-2xl font-semibold text-blue-600 mt-8 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Definition of a Medical Device
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          A medical device refers to any instrument, apparatus, machine, or related article intended
          for use in the diagnosis, prevention, monitoring, or treatment of diseases and other
          medical conditions.
        </motion.p>

        {/* Understanding ISO 13485 */}
        <motion.h2
          className="text-2xl font-semibold text-blue-600 mt-8 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Understanding ISO 13485 Certification
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          ISO 13485 is a stand-alone Quality Management System (QMS) standard specifically designed
          for the medical device industry. It is derived from the ISO 9000 series and is widely
          accepted as a benchmark for quality in the manufacturing and management of medical
          devices. The certification helps organizations establish a comprehensive QMS that assures
          the consistent quality and safety of medical devices for their intended use. It also
          supports compliance with regulatory frameworks and industry protocols by offering a
          structured and realistic foundation.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          The certification can be obtained by companies of any size or geographical location
          involved in the manufacturing of medical devices. ISO 13485 has been implemented in
          organizations across more than 21 countries and continues to be a global standard in
          ensuring quality within the medical device industry.
        </motion.p>

        {/* Who Should Implement */}
        <motion.h2
          className="text-2xl font-semibold text-blue-600 mt-8 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Who Should Implement ISO 13485
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          ISO 13485 is essential for designers, manufacturers, and distributors of medical devices.
          However, suppliers and service providers within the medical device supply chain can also
          implement the standard. Doing so enhances their market reputation and gives them a
          competitive advantage through increased credibility and compliance recognition.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          The scope of ISO 13485 extends to manufacturers of in vitro diagnostic (IVD) devices,
          manufacturers of reagents or substances intended for use in IVD or MD products, and
          medical device suppliers involved in the design, assembly, or servicing of such products.
        </motion.p>

        {/* Key Benefits */}
        <motion.h2
          className="text-2xl font-semibold text-blue-600 mt-8 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          Key Benefits of ISO 13485 Implementation
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          Organizations that implement ISO 13485 can expect significant improvements in brand
          credibility and corporate identity. The standard encourages evidence-based decision-making,
          fosters continual improvement, and enhances employee engagement. Most importantly, it
          leads to increased customer satisfaction by ensuring that the devices produced are safe,
          effective, and compliant with international standards.
        </motion.p>
      </div>
    </section>
  );
};

export default ISO13485;
