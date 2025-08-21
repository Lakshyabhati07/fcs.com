import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Certifications = () => {
  const certifications = [
    "ISO 22000:2018", "ISO 45001:2018", "ISO 9001:2015", "ISO 14001:2015",
    "FSSC 22000", "HACCP", "Non-GMO", "BRCGS",
    "BHOG Scheme", "Clean Street Food", "Proterra", "Eat Right Campus",
    "Sustainability", "FoSTaC Training", "GMP+", "Sedex /SMETA",
    "USFDA Registration", "Halal Certification", "Kosher Certification", "ZED Scheme",
    "RTRS", "Hygiene Rating Scheme", "FSSAI Third Party Auditing"
  ];

  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    if (showAll) {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setShowAll((prev) => !prev);
  };

  const visibleCerts = isMobile && !showAll ? certifications.slice(0, 6) : certifications;

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-br from-green-100 via-lime-50 to-white"
      id="certifications"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 tracking-wide">
          <span className="text-orange-600">Certification</span>
          <span className="text-green-600"> / Scheme</span>
          <span className="text-blue-600"> / License</span>
        </h2>

        {/* Certification Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <AnimatePresence>
            {visibleCerts.map((cert) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }} 
                className="text-gray-800 text-md font-semibold p-3 rounded-lg shadow-sm 
                           hover:shadow-md cursor-pointer bg-white transition-all duration-300"
              >
                {cert}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle button */}
        {isMobile && (
          <div className="mt-6">
            <button
              onClick={handleToggle}
              className="px-6 py-2 bg-orange-500 text-white font-medium rounded-full shadow hover:bg-orange-600 transition"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
