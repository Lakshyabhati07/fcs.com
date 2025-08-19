import { motion } from "framer-motion";
import { FaShieldAlt, FaCheckCircle, FaGlobe, FaCertificate } from "react-icons/fa";

const SQF = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="py-12 px-4 md:px-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          What is SQF?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-justify max-w-5xl mx-auto"
        >
          SQF (Safe Quality Food) is a globally recognized food safety certification
          program benchmarked by the Global Food Safety Initiative (GFSI). It ensures
          food safety, quality, and regulatory compliance across the entire supply chain.
        </motion.p>
      </section>

      {/* Introduction */}
      <section className="py-10 px-4 md:px-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-4 text-lg leading-relaxed"
        >
          <p>
            Globalization has revolutionized the food supply chain, creating new
            opportunities for companies worldwide. As the demand for food ingredients
            and raw materials increases, protecting consumers while promoting food
            safety, security, and quality has become critical.
          </p>
          <p>
            The Global Food Safety Initiative (GFSI) is a collaborative effort among
            food industry stakeholders to guarantee the safety of food products across
            the supply chain. It sets globally recognized benchmarks to ensure
            consistency and continuous improvement in food safety management systems.
          </p>
          <p>
            SQF is one of the food safety standards recognized by GFSI. Companies
            implementing SQF can demonstrate compliance with GFSI’s global standards,
            enhancing credibility and market access.
          </p>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="bg-white py-12 px-4 md:px-16">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
          {[
            {
              icon: <FaShieldAlt size={40} className="text-orange-500" />,
              title: "Global Recognition",
              desc: "SQF is accepted worldwide and is recognized by major retailers, brands, and foodservice providers.",
            },
            {
              icon: <FaCheckCircle size={40} className="text-green-500" />,
              title: "Compliance",
              desc: "Demonstrates that your food safety practices meet global and regulatory standards.",
            },
            {
              icon: <FaGlobe size={40} className="text-blue-500" />,
              title: "Wide Reach",
              desc: "SQF-certified sites span over 40 countries and 6 continents with 14,000+ certifications.",
            },
            {
              icon: <FaCertificate size={40} className="text-purple-500" />,
              title: "Quality Assurance",
              desc: "Provides third-party verification of product, process, or service quality and safety.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-12 px-4 md:px-16 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6 text-center text-orange-600"
        >
          SQF Food Safety Certification Program
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="space-y-4 text-lg leading-relaxed text-gray-700"
        >
          <p>
            The SQF Program is a credible and rigorous food safety and quality
            certification program. Its Food Safety Codes are designed to meet industry,
            customer, and regulatory requirements for all sectors of the food supply
            chain — from the farm to retail.
          </p>
          <p>
            Achieving SQF certification enhances your company's reputation, opens doors
            to global markets, and differentiates your business as a trusted partner in
            the food industry.
          </p>
          <p>
            SQF certification is backed by 13 industry-specific codes, providing
            step-by-step guidance for organizations aiming to implement and maintain
            the highest safety and quality standards.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default SQF;
