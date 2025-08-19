// src/pages/services/ISO14001.jsx
import React from "react";
import { motion } from "framer-motion";

const ISO14001 = () => {
  return (
    <section className="min-h-screen py-16 px-6 bg-gradient-to-br from-white via-lime-50 to-green-100 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-orange-600 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ISO 14001 Environmental Management System (EMS) Certification
        </motion.h1>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          ISO 14001 certification supports organizations in achieving their
          environmental management objectives by enhancing operational control
          and integrating environmental considerations into core business
          strategies. Through TMC’s Environmental Management System
          certification consultancy, companies can strengthen their
          environmental performance, gain a competitive edge, and reinforce
          their corporate reputation by reducing environmental impacts across
          all areas of operation.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Certification under ISO 14001 helps organizations foster a culture of
          continual improvement aimed at minimizing environmental footprint. It
          improves operational control over key environmental aspects and
          enables better decision-making by identifying and managing
          environmental risks and opportunities. By embedding environmental
          thinking into strategic planning, companies are able to align
          sustainability goals with overall business objectives.
        </motion.p>

        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          TMC’s consulting services also assist in optimizing the performance of
          your Environmental Management System, and due to ISO’s High-Level
          Structure, ISO 14001 can be seamlessly integrated with other
          management systems for streamlined compliance and efficiency.
        </motion.p>
      </div>
    </section>
  );
};

export default ISO14001;
