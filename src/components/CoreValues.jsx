// src/components/CoreValues.jsx
import { motion } from "framer-motion";
import communicationIcon from "../assets/communication.png"; // adjust path if needed

const coreValues = [
  { title: "Integrity", color: "text-green-600", emoji: "⚖️", desc: "We stand by strong ethics and fairness." },
  { title: "Accountability", color: "text-blue-800", emoji: "✅", desc: "We take responsibility for our actions." },
  { title: "Empathy", color: "text-pink-500", emoji: "🩷", desc: "We understand and respect others’ feelings." },
  { title: "Communication", color: "text-blue-900", icon: communicationIcon, desc: "We promote transparency and clarity." },
  { title: "Innovation", color: "text-orange-600", emoji: "💡", desc: "We drive change with creative thinking." },
];

const CoreValues = () => {
  return (
    <section
      className="py-16 px-6 bg-gradient-to-br from-green-100 via-lime-50 to-white"
      id="core-values"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
          Our Core Values
        </h2>

        {/* Wrapper with flex for large screens */}
        <div className="flex flex-col items-center space-y-8 lg:space-y-12">
          {/* Top row with 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {coreValues.slice(0, 3).map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
              >
                {value.icon ? (
                  <img
                    src={value.icon}
                    alt={value.title}
                    className="mx-auto mb-3 w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  />
                ) : (
                  <div className="text-5xl mb-3">{value.emoji}</div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${value.color}`}>
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom row with 2 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:w-2/3">
            {coreValues.slice(3).map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
              >
                {value.icon ? (
                  <img
                    src={value.icon}
                    alt={value.title}
                    className="mx-auto mb-3 w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  />
                ) : (
                  <div className="text-5xl mb-3">{value.emoji}</div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${value.color}`}>
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
