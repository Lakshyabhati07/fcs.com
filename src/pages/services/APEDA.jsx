// src/pages/services/APEDA.jsx

import { motion } from "framer-motion";

const APEDA = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-green-50 to-emerald-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-green-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          APEDA – Agricultural and Processed Food Products Export Development Authority
        </motion.h1>

        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          The Agricultural and Processed Food Products Export Development Authority (APEDA) 
          was established by the Government of India through the Agricultural and Processed 
          Food Products Export Development Authority Act, which was passed by Parliament in 
          December 1985. The Act (No. 2 of 1986) came into effect on 13th February 1986, as 
          notified in the Gazette of India: Extraordinary, Part-II, Section 3(ii), dated 
          13.02.1986. APEDA replaced the Processed Food Export Promotion Council (PFEPC) and 
          has since been entrusted with the responsibility of promoting and developing exports 
          of various agricultural and processed food products.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-green-600 mt-6 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Scheduled Products under APEDA
        </motion.h2>
        <motion.p
          className="mb-4 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          The scheduled products under APEDA's mandate include fruits, vegetables and their 
          products; meat and meat products; poultry and poultry products; dairy products; 
          confectionery, biscuits, and bakery items; honey, jaggery, and sugar products; 
          cocoa and its derivatives including all types of chocolates; alcoholic and 
          non-alcoholic beverages; cereals and cereal products; groundnuts, peanuts, and 
          walnuts; pickles, papads, and chutneys; guar gum; floriculture and floriculture 
          products; herbal and medicinal plants; de-oiled rice bran; green pepper in brine; 
          and cashew nuts and their products. Additionally, Basmati Rice is specifically 
          included in the Second Schedule of the APEDA Act.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-green-600 mt-6 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Role in Organic Production & Other Jurisdictions
        </motion.h2>
        <motion.p
          className="text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          APEDA also serves as the Secretariat to the National Accreditation Board (NAB) for 
          implementing the accreditation of Certification Bodies under the National Programme 
          for Organic Production (NPOP). As per the NPOP, organic products meant for export 
          must be produced, processed, and packaged in accordance with the standards set out 
          in the official NPOP document. Furthermore, pursuant to the Directorate General of 
          Foreign Trade (DGFT) Notification No. 6/2015-2020 dated 14th June 2021, products 
          such as cashew kernels, cashew nut shell liquid, and cardanol now fall under the 
          jurisdiction of APEDA.
        </motion.p>
      </div>
    </section>
  );
};

export default APEDA;
