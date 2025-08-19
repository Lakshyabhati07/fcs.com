// src/pages/services/SA8000.jsx
import React from "react";
import { motion } from "framer-motion";

const SA8000 = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <motion.h1
          className="text-3xl font-bold text-blue-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          SA 8000: Social Accountability Standard
        </motion.h1>

        {/* Content */}
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          SA 8000 is the world’s leading certification program focused on social accountability.
          By implementing this standard, organizations can significantly enhance their social
          management systems, thereby building trust and satisfaction among customers, stakeholders,
          and supply chain partners. Unlike other social standards or codes of conduct, SA 8000 is
          designed to integrate social responsibility across all organizational policies and
          practices, offering a holistic framework that also includes a three-year certification
          validity period.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          The SA 8000 standard is rooted in globally accepted principles of decent work. It is based
          on the Universal Declaration of Human Rights, International Labour Organization (ILO)
          conventions, and applicable national labor laws. SA 8000 adopts a management systems
          approach to social performance, emphasizing continual improvement to help organizations
          meet the expectations of their customers and address risks and stakeholder concerns
          related to ethical and responsible business conduct.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          This certification is voluntary and suitable for organizations of any size—large, medium,
          or small—looking to strengthen their ethical practices and sustainability performance. The
          SA 8000 audit is conducted against the defined requirements of the standard and ensures
          that manufacturing processes are safe, legal, ethical, and secure. Developed in 1997 by
          Social Accountability International (SAI), SA 8000 was the first globally credible
          standard for social certification and remains a benchmark in the field.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          One of the practical advantages of SA 8000 certification is its broad recognition. A
          certified supplier can share their certificate and audit report with multiple customers,
          reducing the need for separate social audits for each client. This feature streamlines
          compliance and opens the door for new business relationships. For instance, global
          retailers such as Walmart accept the SA 8000 certificate and accompanying audit report,
          evaluating them against their own social audit criteria to assign ratings to suppliers.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          It is important to note that SA 8000 audits are not conducted by SAI directly. Only
          approved and accredited certification bodies, which must be full members of the
          Association of Professional Social Compliance Auditors (APSCA), are authorized to perform
          these audits. Most international retailers and importers require that audit reports come
          from auditors and monitoring firms that hold valid APSCA membership numbers, ensuring
          credibility and global acceptance.
        </motion.p>

        {/* Key Benefits */}
        <motion.h2
          className="text-2xl font-semibold text-blue-600 mt-8 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Key Benefits of SA 8000 Certification
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          SA 8000 certification is valid for three years and supports organizations in enhancing
          their social performance and ethical trading programs. It facilitates the development of a
          comprehensive social management system and promotes compliance with international and
          national labor regulations. Organizations can also benefit from waivers of
          customer-specific code of conduct audits, reducing audit fatigue and administrative
          overhead.
        </motion.p>
      </div>
    </section>
  );
};

export default SA8000;
