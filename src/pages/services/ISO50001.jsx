// src/pages/services/ISO50001.jsx
import React from "react";
import { motion } from "framer-motion";

const ISO50001 = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-blue-50 to-green-100 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-blue-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ISO 50001 – Energy Management System Certification
        </motion.h1>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          ISO 50001 is an internationally recognized standard designed to
          support organizations of all sizes in establishing a systematic
          approach to improving energy performance and promoting more efficient
          energy management. Originally published in 2011, the updated 2018
          version—ISO 50001:2018—provides enhanced alignment with other ISO
          management system standards such as ISO 9001 and ISO 14001. This
          shared structure facilitates seamless integration into existing
          management systems.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          The 2018 revision places greater emphasis on the role of top
          management in driving organizational energy performance. This shift
          encourages a cultural transformation by embedding energy awareness at
          all levels of the business.
        </motion.p>

        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Implementing ISO 50001 helps organizations reduce energy consumption,
          improve operational efficiency, and minimize environmental impact. It
          also supports risk management strategies related to energy use and
          cost, encourages continuous improvement, and strengthens corporate
          reputation through a demonstrated commitment to sustainability.
        </motion.p>
      </div>
    </section>
  );
};

export default ISO50001;
