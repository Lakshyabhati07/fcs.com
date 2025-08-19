// src/pages/services/ExportInspectionCouncil.jsx

import { motion } from "framer-motion";

const ExportInspectionCouncil = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-gray-50 to-green-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-green-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Export Inspection Council (EIC)
        </motion.h1>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          The Export Inspection Council (EIC) was established by the Government of
          India under Section 3 of the Export (Quality Control and Inspection) Act,
          1963 (Act 22 of 1963), to ensure the sound development of India’s export
          trade through quality control and inspection measures. The EIC functions
          as an advisory body to the Central Government and is empowered under the
          Act to notify commodities subject to quality control and/or inspection
          before export, establish quality standards for such commodities, and
          specify the type of quality control and inspection to be applied.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          In addition to its advisory role, the EIC exercises technical and
          administrative oversight over five Export Inspection Agencies (EIAs)
          located in Chennai, Delhi, Kochi, Kolkata, and Mumbai. These agencies,
          constituted under Section 7 of the Act by the Ministry of Commerce, are
          responsible for implementing the measures and policies framed by the EIC.
          The EIC, either directly or through the EIAs, provides services related to
          the certification of export commodities by installing quality assurance
          systems in exporting units. Certification is offered in two primary
          formats: consignment-wise inspection and certification of food product
          quality through the implementation of Food Safety Management Systems in
          food processing units. Another key service provided by EIC is the issuance
          of Certificates of Origin under various preferential tariff schemes for
          exporters.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Under the provisions of the Act, the Council is the apex body and is
          authorized to constitute specialist committees to assist in its duties.
          Pursuant to Section 3 of the Export (Quality Control and Inspection) Act,
          1963, and Rule 3 of the Export (Quality Control and Inspection) Rules,
          1964, the Central Government has reconstituted the Council through various
          notifications, including S.O. No. 2856(E) dated 09.11.2009 and S.O.
          3379(E) dated 29.09.2020, nominating members for fixed terms.
        </motion.p>

        <motion.p
          className="mb-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          The EIC, through its field offices, enforces quality control and
          inspection for products notified under the Act to ensure compliance with
          the destination country’s import requirements. This includes both
          consignment-wise inspection and Food Safety Management System-based
          inspections. A three-tier surveillance mechanism is implemented for
          approved establishments. The list of products requiring mandatory
          pre-shipment inspection and certification prior to export from India is
          maintained by the EIC.
        </motion.p>

        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          For products not covered under the Act but requiring a Certificate of
          Compliance by the importing country, the EIC has introduced a Voluntary
          Certification Scheme. This scheme is designed to support exporters in
          meeting foreign regulatory requirements.
        </motion.p>
      </div>
    </section>
  );
};

export default ExportInspectionCouncil;
