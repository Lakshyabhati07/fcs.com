// src/pages/services/Vegan.jsx
import React from "react";
import { motion } from "framer-motion";

const Vegan = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-lime-50 to-green-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-orange-600 mb-6"
        >
          Plant-Based, Vegan, and Vegetarian Certification
        </motion.h1>

        {/* Content */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          The Plant-Based, Vegan, and Vegetarian Certification has been
          developed in response to shifting consumer preferences and the growing
          demand for plant-based products. With an increasing number of novel
          plant-based alternatives entering the market, the food industry faces
          the dual challenge of meeting consumer expectations while protecting
          brand reputation and mitigating operational risks.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-700 text-lg mb-6 leading-relaxed"
        >
          To support this transition, companies can leverage a proprietary
          supply chain certification management database to efficiently gather
          documentation and streamline the certification process. This
          centralized data system also supports compliance with other recognized
          certifications, including Non-GMO Project Verification and the USDA
          National Organic Program, enabling food processors to manage multiple
          certifications simultaneously and reduce administrative burden.
        </motion.p>

        {/* Excluded Ingredients */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Ingredient Guidelines
          </h2>
          <p className="text-gray-700 leading-relaxed">
            While this certification generally excludes ingredients such as
            meat, poultry, fish, seafood, animal-derived fats, gelling agents of
            animal origin, and cheese made with animal rennet or filtration aids
            like gelatin and fish glue, the use of milk, eggs, and honey is
            permitted if these products are sourced from farms that follow
            established animal welfare standards, legal guidelines, or
            recognized best practices.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Importantly, brand owners or companies responsible for food labeling
            must not conduct or commission animal testing—including testing of
            ingredients, inputs, or processing aids. The vegan claim signifies
            that animals have not been involved in any phase of manufacturing,
            preparation, treatment, or packaging.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-3">
            Benefits of Certification
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This certification helps businesses demonstrate their commitment to
            ethical and transparent practices, while giving consumers confidence
            that their dietary and ethical choices are being respected. It also
            serves as a valuable extension to other food safety and specialty
            certifications such as organic, gluten-free, and GMP programs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vegan;
