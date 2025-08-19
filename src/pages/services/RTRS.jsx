// src/pages/services/RTRS.jsx
import React from "react";
import { motion } from "framer-motion";

const RTRS = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-amber-50 to-yellow-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-yellow-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          RTRS – Round Table on Responsible Soy
        </motion.h1>

        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          The Round Table on Responsible Soy (RTRS) is a global, multi-stakeholder initiative 
          comprising soy producers, retailers, and civil society organizations. It was established 
          to promote the sustainable production and trade of soy worldwide. RTRS provides a 
          voluntary certification framework based on comprehensive sustainability standards, 
          aimed at ensuring responsible cultivation, processing, and usage of soy in global supply 
          chains.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-yellow-600 mt-6 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Objectives and Approach
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          The primary objective of RTRS is to promote and facilitate responsible soy production, 
          processing, and trade on a global scale. It emphasizes inclusive stakeholder dialogue 
          and consensus-driven decision-making. The initiative seeks to foster soy production 
          methods that are environmentally protective, socially responsible, and economically 
          viable. A critical part of RTRS’s mission is to maintain and continually improve its 
          Production Standard, ensuring it remains effective and relevant in a rapidly evolving 
          agricultural landscape.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-yellow-600 mt-6 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Membership and Certification
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Becoming an RTRS member means actively contributing to a collective effort that 
          redefines responsible business practices within the soy industry. Membership allows 
          individuals and organizations to participate in shaping decisions that promote socially 
          just, economically viable, and environmentally sound soy production. Obtaining RTRS 
          certification signifies a commitment to this shared vision and strengthens relationships 
          with like-minded stakeholders through the endorsement of common sustainability goals.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-yellow-600 mt-6 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Who Can Get Certified?
        </motion.h2>
        <motion.p
          className="text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          RTRS certification is accessible to both small and large soy producers who meet the 
          established production standards. To support smallholders, group certification options 
          are available, helping to minimize associated costs. Additionally, organizations 
          operating within the soy supply chain can pursue Chain of Custody Certification, which 
          assures customers that the soy-based products they purchase originate from responsible 
          and sustainable sources.
        </motion.p>
      </div>
    </section>
  );
};

export default RTRS;
