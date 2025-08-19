// src/pages/services/ForeignSupplierVerification.jsx

import { motion } from "framer-motion";

const ForeignSupplierVerification = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-gray-50 to-green-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-green-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Foreign Supplier Verification Programs (FSVPs)
        </motion.h1>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          The Foreign Supplier Verification Programs (FSVPs) require importers to share responsibility for ensuring the safety of imported food. 
          The framework is risk-based, considering factors such as the types of hazards involved, the nature of the importer, and the reliability of suppliers. 
          Importers have flexibility in how they meet FSVP requirements, including the ability to assess activities conducted by other entities. 
          The program is also aligned with the supply-chain provisions outlined in the Preventive Controls rules under the Food Safety Modernization Act (FSMA).
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          The primary purpose of FSVPs is to provide adequate assurance that foreign suppliers produce food using processes and procedures that offer the same level of public health protection as those required under FSMA preventive controls or produce safety regulations. 
          Additionally, it aims to ensure that imported food is neither adulterated nor misbranded, especially in relation to allergen labeling.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          The term “importer” refers to the U.S. owner or consignee of a food product at the time it enters the United States. 
          If no such U.S.-based party exists at the time of entry, the importer is considered to be the U.S. agent or representative of the foreign owner or consignee, provided this designation is confirmed through a signed statement of consent.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          A foreign supplier is defined as the entity that manufactures or processes the food, raises the animal, or grows the food that is exported to the U.S. 
          without undergoing further manufacturing or processing by another establishment. An exception is made for minor modifications such as labeling or other de minimis activities.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Certain entities are exempt from FSVP requirements. These include firms already subject to juice or seafood Hazard Analysis and Critical Control Point (HACCP) regulations, 
          food imported for research or evaluation, food intended for personal consumption, alcoholic beverages and their ingredients (when used in alcoholic beverage production), 
          food transshipped through the U.S., food imported solely for processing and re-export, returned U.S. food products, and meat, poultry, and egg products regulated by the USDA at the time of importation.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          FSVP compliance dates are based on a phased approach. Importers were required to begin compliance no earlier than 18 months following the issuance of the final rule, 
          which corresponds to May 30, 2017. If a foreign supplier is subject to preventive controls or produce safety regulations, 
          the importer must comply with FSVP six months after the supplier is required to comply with those regulations.
        </motion.p>

        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Oversight of FSVP is managed at all levels by the U.S. Food and Drug Administration (FDA). 
          The FDA has the authority to revoke recognition granted to an accreditation body and can withdraw accreditation from a third-party certification body, 
          regardless of whether it was granted by an FDA-recognized accreditation body. The FDA is not required to wait for the accreditation body to take action 
          before intervening in the case of a problematic certification body.
        </motion.p>
      </div>
    </section>
  );
};

export default ForeignSupplierVerification;
