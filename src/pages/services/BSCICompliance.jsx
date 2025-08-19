// src/pages/services/BSCICompliance.jsx

import { motion } from "framer-motion";

const BSCICompliance = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-blue-50 to-indigo-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <motion.h1
          className="text-3xl font-bold text-indigo-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          BSCI: Advancing Social Compliance in Global Supply Chains
        </motion.h1>

        {/* Introduction */}
        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          BSCI, which stands for Business Social Compliance Initiative, is a globally recognized
          framework developed by Amfori to promote ethical and responsible business practices across
          complex international supply chains. The Amfori BSCI Code of Conduct is grounded in
          internationally accepted conventions such as the Universal Declaration of Human Rights,
          the UN Guiding Principles for Business and Human Rights, the Children’s Rights and
          Business Principles, OECD Guidelines, the UN Global Compact, and International Labour
          Organization (ILO) Conventions and Recommendations. These foundational documents
          collectively aim to improve working conditions throughout the supply chain, particularly in
          factories producing goods for global brands and retailers.
        </motion.p>

        {/* Core Objective */}
        <motion.h2
          className="text-2xl font-semibold text-indigo-600 mt-6 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Core Objective of Amfori BSCI
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          The core objective of Amfori BSCI is to elevate social performance within the
          manufacturing and sourcing processes of businesses. As global demand for responsible
          sourcing intensifies, retailers and brands are increasingly focused on building ethical
          supply chains. The BSCI framework supports this shift by offering a robust social auditing
          structure that enables transparency, accountability, and continuous improvement.
        </motion.p>

        {/* Benefits */}
        <motion.h2
          className="text-2xl font-semibold text-indigo-600 mt-6 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Benefits of Implementing BSCI
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Organizations that implement the BSCI standard benefit in several ways. It ensures
          compliance with both international and national labor regulations, thereby enhancing
          corporate credibility and trust. It also facilitates stronger relationships with customers
          and provides access to new business opportunities, particularly with international and
          European retailers where BSCI certification often serves as a pre-qualification
          requirement. Additionally, companies can obtain waivers for customer-specific codes of
          conduct audits, simplifying compliance efforts and reducing audit fatigue.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          The framework helps improve reporting structures, enhances traceability, and serves as a
          globally accepted benchmark that can attract new customers and partners.
        </motion.p>

        {/* Key Focus Areas */}
        <motion.h2
          className="text-2xl font-semibold text-indigo-600 mt-6 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Key Focus Areas of the BSCI Code of Conduct
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          The Amfori BSCI Code of Conduct places strong emphasis on labor rights and social
          protections within the workplace. Key focus areas include the establishment of effective
          social management systems and the promotion of a cascading effect throughout the supply
          chain. Worker involvement and protection are integral components, along with the rights to
          freedom of association and collective bargaining. The standard prohibits discrimination,
          child labor, precarious and bonded employment, and mandates fair remuneration, decent
          working hours, and occupational health and safety. It also includes specific safeguards
          for young workers to ensure they are not exposed to exploitative conditions.
        </motion.p>

        {/* Conclusion */}
        <motion.p
          className="text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Amfori BSCI continues to serve as a vital tool for companies seeking to operate
          responsibly while improving the welfare of workers across global supply chains. It
          reinforces ethical sourcing practices and supports sustainable business growth through
          enhanced social compliance.
        </motion.p>
      </div>
    </section>
  );
};

export default BSCICompliance;
