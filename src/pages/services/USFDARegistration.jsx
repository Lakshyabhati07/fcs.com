// src/pages/services/USFDARegistration.jsx
import React from "react";
import { motion } from "framer-motion";

const USFDARegistration = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-blue-50 to-cyan-100 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-blue-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          US FDA Food Facility Registration
        </motion.h1>

        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          The U.S. Food and Drug Administration (US FDA) is responsible for ensuring 
          that all food sold within the United States is safe, wholesome, and properly 
          labeled. This mandate applies equally to domestically produced food and 
          food imported from foreign countries. The FDA operates under the authority 
          of the Federal Food, Drug, and Cosmetic Act (FD&C Act) and the Fair Packaging 
          and Labeling Act, which regulate food products under FDA jurisdiction.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          In accordance with the Bioterrorism Act, all domestic and foreign food 
          facilities that manufacture, process, pack, or hold food intended for human 
          or animal consumption in the U.S. are required to register with the FDA. 
          This includes the owner, operator, or authorized agent in charge of the 
          facility. Registration is mandatory for domestic facilities regardless of 
          whether the food enters interstate commerce.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Foreign facilities must also register unless the food they handle undergoes 
          further substantial processing (including packaging) at another foreign 
          facility prior to export to the U.S. However, if such additional processing 
          is minimal (e.g., merely applying a label), then both facilities must be 
          registered. Manufacturers of acidified and low-acid canned foods are further 
          required to obtain FDA Food Canning Establishment (FCE) registration. Dietary 
          supplement manufacturers must also comply with FDA registration requirements.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Prior to Fiscal Year 2012, food facility registration with the FDA was a 
          one-time process. However, with the enactment of the FDA Food Safety 
          Modernization Act (FSMA), the process now requires biennial renewal. All 
          domestic and foreign food facilities must renew their registration between 
          October 1 and December 31 of each even-numbered year beginning in 2012.
        </motion.p>

        <motion.p
          className="text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Additionally, every foreign food facility must designate a U.S. FDA Agent, 
          who serves as the primary domestic contact for FDA communications. The 
          agent’s information must be provided at the time of registration and updated 
          promptly if changes occur.
        </motion.p>
      </div>
    </section>
  );
};

export default USFDARegistration;
