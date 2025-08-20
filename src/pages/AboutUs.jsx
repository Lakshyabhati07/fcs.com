
import { motion } from "framer-motion";

const Section = ({ title, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="space-y-4"
  >
    <h2 className="text-3xl sm:text-4xl font-extrabold text-green-800 hover:underline underline-offset-8 transition-all duration-300 text-center">
      {title}
    </h2>
    <div className="text-gray-800 leading-relaxed text-lg text-justify sm:text-justify">
      {children}
    </div>
  </motion.div>
);

const AboutUs = () => {
  return (
    <div id="about" className="bg-gradient-to-tl from-green-100 via-lime-50 to-white min-h-screen py-16 px-6 sm:px-12 text-gray-800 font-sans">
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-600 tracking-tight drop-shadow-md">
          About Fortune Consultants
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Your Sustainable Growth Partner
        </p>
        <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Main Sections */}
      <div className="space-y-20 max-w-6xl mx-auto text-justify">
        <div className="space-y-16 max-w-6xl mx-auto text-justify px-4">
  <Section title="Who We Are?" delay={0.1}>
    {/* Animated Title */}
    <div className="flex flex-wrap items-center justify-center gap-2 text-center">
  <h3 className="text-orange-600 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl animate-fade-in">
    Fortune
  </h3>
  <h3 className="text-orange-600 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl animate-slide-in">
    Consultants
  </h3>
  <h3 className="text-green-800 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl animate-glow">
    : A Decade-Long Vision Realized
  </h3>
</div>


    {/* Description */}
    <p className="mt-8 text-lg leading-relaxed text-gray-700 animate-fade-in-up">
      <span className="font-semibold text-orange-600">Fortune Consultants</span>, 
      formally established in <strong className="text-orange-600">2021</strong>, is the culmination of a vision that began 
      over a decade ago—driven by the need for specialized, efficient, and cost-effective consulting services across critical domains. 
      With a deep commitment to empowering clients—from emerging entrepreneurs to established enterprises—
      <span className="font-semibold text-orange-600"> Fortune Consultants</span> delivers tailor-made solutions that foster sustainable growth in areas such as{" "}
      <span className="font-semibold text-orange-600">
        Food Safety, Quality Assurance, EHS, OHSAS, Safety Management, Sustainability, and Social Standards.
      </span>
    </p>

    <p className="mt-6 text-lg leading-relaxed text-gray-700 animate-fade-in-up delay-300">
      Our team brings together over <strong className="text-orange-600">25 years</strong> of diverse industry experience, forming a robust collective of 
      professionals spanning technical, commercial, legal, R&D, marketing, training, and auditing expertise. This multidisciplinary approach 
      ensures that every client engagement is grounded in practical insight, strategic foresight, and measurable impact.
    </p>
  </Section>
</div>


        <Section title="Our Vision" delay={0.2}>
  <div className="text-center max-w-4xl mx-auto bg-gradient-to-r from-orange-50 via-white to-orange-50 rounded-2xl shadow-md p-8">
    <em className="text-xl md:text-2xl italic text-orange-700 leading-relaxed font-semibold">
      “To be the sustainable growth partner in the progressive journey of our esteemed customers.”
    </em>
    
  </div>
</Section>



        <Section title="Why Choose Us?" delay={0.4}>
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            {[
              {
                title: "✅ Expertise & Experience",
                desc: "Proven Track Record: With extensive experience in the industry, we are delivering high-quality consulting services.",
              },
              {
                title: "🔍 Customer-Centric Approach",
                desc: "We offer personalized support and guidance to help you achieve your goals.",
              },
              {
                title: "🌍 Regulatory Compliance",
                desc: "Up-to-Date Knowledge: We stay updated with the latest regulations & standards to ensure your business compliance.",
              },
              {
                title: "💡 Sustainability & Innovation",
                desc: "We promote sustainable practices to reduce environmental impact and improve energy efficiency.",
              },
              {
                title: "🤝 Comprehensive Services",
                desc: "Wide Range of Offerings: From HACCP implementation to regulatory compliance, we offer a broad spectrum of services to meet diverse needs.",
              },
              {
                title: "🏆 Commitment to Quality",
                desc: "Relentless commitment to food safety, hygiene, and excellence.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white bg-opacity-70 p-5 rounded-lg shadow-md hover:shadow-lg transition-all border border-green-300"
              >
                <h3 className="text-lg font-semibold text-green-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};

export default AboutUs;
