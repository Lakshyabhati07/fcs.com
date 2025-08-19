// src/pages/services/Auditing.jsx

import { motion } from "framer-motion";

const Auditing = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-gray-50 to-green-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-green-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Auditing Overview
        </motion.h1>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Auditing is defined as an on-site verification activity—such as an inspection or examination—of a process or quality system to ensure compliance with specific requirements. 
          Audits may be conducted across the entire organization or may focus on specific functions, processes, or production steps. 
          Some audits also serve administrative purposes, such as document review, risk assessment, performance evaluation, or verification of completed corrective actions.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          According to ISO 19011:2018, an audit is a systematic, independent, and documented process for obtaining verifiable and relevant audit evidence—such as records or statements of fact—and 
          objectively evaluating this evidence to determine the extent to which audit criteria (a set of policies, procedures, or requirements) are fulfilled. 
          There are three primary types of audits.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-green-600 mt-8 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Types of Audits
        </motion.h2>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <strong>Process Audit:</strong> Designed to confirm that processes operate within established limits. 
          It measures conformance to standards by evaluating an operation or method against predetermined instructions. 
          It examines factors such as time, accuracy, temperature, pressure, responsiveness, and component mixture. 
          Additionally, it assesses resources such as equipment, materials, and personnel, along with environmental conditions and procedural adherence, to determine process performance.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <strong>Product Audit:</strong> Examines a specific product or service—such as hardware, processed material, or software—to verify compliance with applicable requirements, including performance standards, specifications, and customer needs.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <strong>System Audit:</strong> Conducted on a management system to ensure that the system’s elements are appropriate, effective, and developed in accordance with specified standards. 
          For example, a quality management system audit verifies conformance with internal policies, contractual obligations, and regulatory mandates.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-green-600 mt-8 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Audit Classifications
        </motion.h2>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Audits may also be classified as internal (first-party audits), second-party (conducted by customers or contracted auditors), or third-party audits performed by independent certification bodies. 
          Third-party audits are valued for their objectivity and are often used to determine certifications such as ISO 9001 or ISO 14001.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-green-600 mt-8 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Other Audit Types
        </motion.h2>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          Performance audits focus on evaluating organizational performance rather than compliance. 
          Follow-up audits ensure that corrective and preventive measures have been implemented effectively after the initial findings.
        </motion.p>

        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          In industries with high risk—like medical devices or electrical equipment—compliance with CE Mark requirements and third-party certification audits is critical for market access. 
          Accredited third-party bodies, such as those recognized by ANSI-ASQ National Accreditation Board (ANAB), are essential for issuing credible certifications.
        </motion.p>
      </div>
    </section>
  );
};

export default Auditing;
