// src/pages/services/RSPO.jsx
import React from "react";
import { motion } from "framer-motion";

const RSPO = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-yellow-50 to-yellow-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <motion.h1
          className="text-3xl font-bold text-yellow-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          RSPO Certification for Sustainable Palm Oil
        </motion.h1>

        {/* Introduction */}
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Palm oil is certified according to strict environmental and social criteria
          established by the Roundtable on Sustainable Palm Oil (RSPO). The primary aim
          of this certification is to reduce the negative environmental and social
          impacts associated with palm oil cultivation, particularly deforestation and
          harm to local communities.
        </motion.p>

        {/* Palm Oil Importance */}
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          As one of the most widely consumed food ingredients globally, palm oil is found
          in approximately half of all packaged food products. Its widespread use is
          attributed to the high efficiency of oil palms, which produce oil year-round.
          Notably, oil palm is the highest-yielding vegetable oil crop, requiring less
          than half the land compared to other oil-producing crops to generate the same
          volume of oil. A single hectare of oil palm can yield up to six tons of oil
          annually, making palm oil the most cost-effective vegetable oil on the global
          market.
        </motion.p>

        {/* RSPO Standards */}
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          In 2008, the RSPO introduced a comprehensive set of environmental and social
          performance standards that producers must follow to obtain Certified
          Sustainable Palm Oil (CSPO) status. When implemented correctly, these standards
          are designed to mitigate adverse effects such as deforestation, poor labor
          practices, and biodiversity loss, thus promoting sustainable development in the
          palm oil industry.
        </motion.p>

        {/* RSPO Goals */}
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          The overarching goal of the RSPO is to encourage the production and use of
          sustainable palm oil through active cooperation across the entire supply chain
          and open dialogue among all stakeholders. Palm oil growers who seek RSPO
          certification undergo a comprehensive five-year certification process. Once
          certified, they are subject to annual assessments to ensure continued
          compliance with RSPO standards.
        </motion.p>

        {/* Operational Benefits */}
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          RSPO certification also offers substantial operational benefits. It facilitates
          the efficient use of resources, supports the implementation of systematic
          management practices, and contributes to improved operational planning and
          reduced post-process verification efforts. These improvements can lead to
          increased profitability and enhanced stakeholder confidence.
        </motion.p>

        {/* Accreditation */}
        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Control Union, an internationally recognized inspection and certification body,
          is accredited to conduct RSPO audits. The program is officially recognized
          under accreditation codes ASI-ACC-017 and ASI-ACC-069 (Malaysia), ensuring
          audits are carried out to the highest global standards.
        </motion.p>
      </div>
    </section>
  );
};

export default RSPO;
