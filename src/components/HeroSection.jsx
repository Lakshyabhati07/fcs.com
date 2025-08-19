import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ModalContactForm from "./ModalContactForm";// Import your existing contact form

import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import img5 from"../assets/img5.webp";
import img6 from "../assets/img6.webp";
import img7 from "../assets/img7.webp";
import img8 from "../assets/img8.webp";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "absolute",
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    position: "absolute",
  }),
};

const HeroSection = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([
    Math.floor(Math.random() * images.length),
    0,
  ]);
  const [started, setStarted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // For modal visibility

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStarted(true);
      const interval = setInterval(() => {
        setCurrentIndex(([prevIndex]) => [
          (prevIndex + 1) % images.length,
          1,
        ]);
      }, 5000);
      return () => clearInterval(interval);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const currentImage = images[currentIndex];

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center px-6 text-center font-sans">
      {/* Blurry Sliding Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial={started ? "enter" : false}
            animate="center"
            exit="exit"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full"
            style={{
              backgroundImage: `url(${currentImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.5,
            }}
          />
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-4 sm:mx-auto bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-sx p-6 sm:p-10 rounded-3xl shadow-2xl border border-white/40">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-black text-blue-800 leading-tight drop-shadow-sm"
        >
          Welcome <br />
          <span className="text-blue-800">to</span> <br />
          <span className="text-orange-600">Fortune </span>
          <span className="text-green-600">Consultants</span>
        </motion.h1>

        <p className="text-blue-800 mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl font-medium">
          Your <span className="text-orange-600 font-bold italic">sustainable</span> 
          <span className="text-orange-600 font-bold italic"> growth &
          compliance</span>  partner.
        </p>

        <motion.div
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
  href="/contact"
  whileHover={{ scale: 1.07 }}
  className="w-full sm:w-auto text-center bg-green-700 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-green-800 transition-all duration-300 ease-in-out"
>
  💬 Let's Talk
</motion.a>


          {/* Request Callback Button */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.07 }}
            className="inline-block bg-orange-700 text-white px-6 sm:px-7 py-3 rounded-full font-bold shadow-lg hover:bg-orange-800 transition-all duration-300 ease-in-out text-center"
          >
            Request a Callback
          </motion.button>
        </motion.div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg relative p-6">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
            >
              ✖
            </button>
            <ModalContactForm onSuccess={() => setIsModalOpen(false)} />

          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
