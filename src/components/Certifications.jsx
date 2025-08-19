import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Certifications = () => {
  const certifications = [
    ["ISO 22000:2018", "ISO 45001:2018", "ISO 9001:2015", "ISO 14001:2015"],
    ["FSSC 22000", "HACCP", "Non-GMO", "BRCGS"],
    ["BHOG Scheme", "Clean Street Food", "Proterra", "Eat Right Campus"],
    ["Sustainability", "FosTaC Training", "GMP+", "Sedex /Smeta"],
    ["USFDA Registration", "Halal Certification", "Kosher Certification", "ZED Scheme"],
    ["RTRS", "Schedule IV Third party Auditing", "Hygiene Rating Scheme", "FSSAI License Registration Return Filing"],
  ].flat();

  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    if (showAll) {
      // If collapsing, scroll back to top of section smoothly
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setShowAll((prev) => !prev);
  };

  const visibleCerts = isMobile && !showAll ? certifications.slice(0, 6) : certifications;

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-br from-green-100 via-lime-50 to-white"
      id="certifications"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-12 tracking-wide">
          <span className="text-orange-600">Certification</span>
          <span className="text-green-600"> / Scheme</span>
          <span className="text-blue-600"> / License</span>
        </h2>

        {/* Certification Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence>
            {visibleCerts.map((cert) => (
              <motion.div
                key={cert}
                layout
                variants={item}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="text-gray-800 text-md font-semibold p-3 rounded-lg shadow-sm 
                           hover:shadow-md cursor-pointer bg-white transition-all duration-300"
              >
                {cert}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button (Mobile only) */}
        <AnimatePresence>
          {isMobile && (
            <motion.div
              key="toggle-btn"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3 }}
              className="mt-6"
            >
              <button
                onClick={handleToggle}
                className="px-6 py-2 bg-orange-500 text-white font-medium rounded-full shadow hover:bg-orange-600 transition"
              >
                {showAll ? "View Less" : "View More"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certifications;
