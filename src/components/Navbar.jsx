import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import ChevronDown from "lucide-react/dist/esm/icons/chevron-down";
import ChevronUp from "lucide-react/dist/esm/icons/chevron-up";

import { motion, AnimatePresence } from "framer-motion";
import logo1 from "../assets/bg1.webp";
import devIcon from "../assets/dev.png";
import retailIcon from "../assets/retail.png";
import {
  FaLeaf,
  FaRecycle,
  FaHandsHelping,
  FaFlask,
  FaUtensils,
  FaProjectDiagram,
  FaTint,
} from "react-icons/fa";

// Service categories with subservices
const allServices = [
  {
    title: "Food & Feed Safety",
    icon: <FaUtensils />,
    subServices: [
      "APEDA",
      "FSSC 22000",
      "ISO22000",
      "BRCGS",
      "IFS Food",
      "HACCP",
      "GMP",
      "Halal",
      "Kosher",
      "Organic",
      "NonGMO",
      "Gluten Free",
      "Vegan",
      "SQF Certification",
      "GMP Plus",
    ],
  },
  {
    title: "Pharma & Nutraceutical",
    icon: <FaFlask />,
    subServices: [
      "ICH Q7",
      "EFfCI GMP",
      "GDP",
      "ISO13485",
      "ISO22716",
      "ISO15378",
      "Nutraceutical",
    ],
  },
  {
    title: "Packaging",
    icon: <FaProjectDiagram />,
    subServices: ["BRCGS Packaging", "ISO15378", "Sustainable Packaging"],
  },
  {
    title: "Sustainability & CSR",
    icon: <FaHandsHelping />,
    subServices: ["SA 8000", "BSCI Compliance", "Sedex SMETA", "RTRS", "FSC"],
  },
  {
    title: "Quality & Environment",
    icon: <FaRecycle />,
    subServices: ["ISO9001", "ISO14001", "ISO45001", "ISO50001", "IATF 16949"],
  },
  {
    title: "Regulatory",
    icon: <FaLeaf />,
    subServices: [
      "US FDA Registration",
      "Foreign Supplier Verification",
      "Export Inspection Council",
    ],
  },
  {
      title: "Training and Development",
      // 🔄 Updated icon
      icon: (
        <img
          src={devIcon}
          alt="Training Icon"
          className="w-4 h-4 sm:w-6 sm:h-6 object-contain"
        />
      ),
      subServices: [
        "Lead Auditor Training",
        "NGMO Training",
        "Internal Auditor Training",
        "Hygiene Rating Auditor Training ",
        "FoSTaC Training",
        "RCA",
        "Sampling & Testing",
        
        "Documentation",
        "Customized Training",
      ],
    },
  {
      title: "Food Retail & Establishments",
      // 🔄 Updated icon
      icon: (
        <img
          src={retailIcon}
          alt="Retail Icon"
          className="w-4 h-4 sm:w-6 sm:h-6 object-contain"
        />
      ),
      subServices: [
        "Hygiene Rating Scheme",
        "Eat Right Scheme",
        "BHOG, Fruits & Vegetables",
        "FSSAI Third Party Audit",
        "University Campuses canteens",
        
        "Food Services Establishments",
        "Restaurants",
  "Cafeterias",
  "Dhabas",
  "Hotels",
  
  "Clean Street Food",
  "Eat Right Campus",
  "School canteens",
  "Zed Assessment",
  "Meat Retail",
      ],
    },
  {
    title: "Specialization",
    icon: <FaTint />,
    subServices: ["Internal Audits", "Gap Analysis","Food Safety Audits"],
  },
];

// Map subservices to paths
const subServiceRoutes = {
  APEDA: "/services/apeda",
  "FSSC 22000": "/services/fssc22000",
  ISO22000: "/services/iso22000",
  BRCGS: "/services/brcgs",
  "IFS Food": "/services/ifsfood",
  HACCP: "/services/haccp",
  GMP: "/services/gmp",
  Halal: "/services/halal",
  Kosher: "/services/kosher",
  Organic: "/services/organic",
  NonGMO: "/services/nongmo",
  "Gluten Free": "/services/glutenfree",
  Vegan: "/services/vegan",
  // "SQF Certification": "/services/sqf-certification",
  "GMP Plus": "/services/gmpplus",
  "ICH Q7": "/services/ichq7",
  "EFfCI GMP": "/services/effci_gmp",
  GDP: "/services/gdp",
  ISO13485: "/services/iso13485",
  ISO22716: "/services/iso22716",
  ISO15378: "/services/iso15378",
  Nutraceutical: "/services/nutraceutical",
  "BRCGS Packaging": "/services/brcgs-packaging",
  "Sustainable Packaging": "/services/sustainable-packaging",
  "SA 8000": "/services/sa8000",
  "BSCI Compliance": "/services/bsci-compliance",
  "Sedex SMETA": "/services/sedexsmeta",
  RTRS: "/services/rtrs",
  FSC: "/services/fsc",
  ISO9001: "/services/iso9001",
  ISO14001: "/services/iso14001",
  ISO45001: "/services/iso45001",
  ISO50001: "/services/iso50001",
  "IATF 16949": "/services/iatf16949",
  "US FDA Registration": "/services/usfdaregistration",
  "Foreign Supplier Verification": "/services/foreignsuppliereverification",
  "Export Inspection Council": "/services/exportinspectioncouncil",
  "Lead Auditor Training": "/services/lead-auditor-training",
  "NGMO Training": "/services/ngmo-training",
  "Internal Auditor Training": "/services/internal-auditor-training",
  "Hygiene Rating Auditor Training": "/services/hygiene-rating-training",
  "FSSAI Training (Special, Advance & Basic)": "/services/fssai-training",
  "Sampling & Testing": "/services/sampling-testing",
  RCA: "/services/rca",
  Documentaton: "/services/documentation",
  "Customized Training": "/services/customized-training",
  "Hygiene Rating Scheme": "/services/hygiene-rating-scheme",
  "Eat Right Scheme": "/services/eat-right-scheme",
  "BHOG, Fruits & Vegetables": "/services/bhog-fruits-vegetables",
  "FSSAI Third Party Audit": "/services/fssai-third-party-audit",
  "Zed Assessment": "/services/zed-assessment",
  "Internal Audits": "/services/internal-audits",
  "Gap Analysis": "/services/gap-analysis",
  "Food Safety Audits":"/services/foodsafety",
  "SQF Certification" : "services/sqf",
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const servicesRef = useRef();
  const projectsRef = useRef();
  const navigate = useNavigate();

  // Toggle a category (accordion behavior)
  const toggleCategory = (title) => {
    setOpenCategory(openCategory === title ? null : title);
  };

  // Handle subservice click
  const handleSubClick = (sub) => {
    const route = subServiceRoutes[sub];
    if (route) {
      navigate(route);

      if (window.innerWidth < 768) {
        // Mobile: Close all menus after clicking a subservice
        setMenuOpen(false);
        setServicesOpen(false);
        setOpenCategory(null);
      } else {
        // Desktop: close services dropdown
        setServicesOpen(false);
        setOpenCategory(null);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth >= 768 && servicesRef.current && !servicesRef.current.contains(event.target)) {
  setServicesOpen(false);
}

      if (projectsRef.current && !projectsRef.current.contains(event.target)) {
        setProjectsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-custom-nav fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo1}
            alt="Logo"
            width={100}
            height={70}
            className="h-auto w-24"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 font-semibold text-black relative">
          <Link to="/">Home</Link>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="hover:text-orange-700 flex items-center gap-1"
              aria-expanded={servicesOpen}
            >
              Services{" "}
              {servicesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -10 }}
  transition={{ duration: 0.2 }}
  className="absolute z-50 mt-6 bg-white border shadow-2xl rounded-xl text-sm p-6 w-[1100px] grid grid-cols-3 gap-6 overflow-y-auto custom-scrollbar"
  style={{
    left: "-700px",
    maxHeight: "500px",
    scrollBehavior: "smooth",
  }}
>
  {allServices.map((cat, idx) => (
    <div key={idx} className="pb-3 border-b border-gray-200">
      <button
        onClick={() => toggleCategory(cat.title)}
        className="w-full flex items-center justify-between text-left text-[18px] font-semibold text-orange-700 hover:text-orange-900"
      >
        <span className="flex items-center gap-2">
          <span className="text-orange-500 text-[20px]">{cat.icon}</span>
          {cat.title}
        </span>
        {openCategory === cat.title ? (
          <ChevronUp size={18} />
        ) : (
          <ChevronDown size={18} />
        )}
      </button>

      <AnimatePresence>
        {openCategory === cat.title && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 grid grid-cols-2 gap-2 text-[17px]"
          >
            {cat.subServices.map((sub, i) => (
              <span
                key={i}
                className="cursor-pointer text-gray-800 hover:text-orange-500 px-2 py-1 rounded-md transition"
                onClick={() => handleSubClick(sub)}
              >
                {sub}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ))}
</motion.div>

              )}
            </AnimatePresence>
          </div>

          {/* Projects Dropdown */}
          <div className="relative" ref={projectsRef}>
            <button
              onClick={() => setProjectsOpen(!projectsOpen)}
              className="hover:text-orange-700 flex items-center gap-1"
            >
              Projects{" "}
              {projectsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <AnimatePresence>
              {projectsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute bg-white shadow-lg rounded-lg text-sm mt-2 z-50 w-44"
                >
                  <Link
                    to="/projects/completed"
                    className="block px-4 py-2 hover:bg-orange-100"
                  >
                    Completed
                  </Link>
                  <Link
                    to="/projects/ongoing"
                    className="block px-4 py-2 hover:bg-orange-100"
                  >
                    Ongoing
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
  onClick={() => setMenuOpen(!menuOpen)} 
  className="text-black"
  aria-label={menuOpen ? "Close menu" : "Open menu"}
>
  {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
</button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-orange-100 px-4 pt-4 pb-6 font-semibold text-black space-y-2"
          >
            <Link to="/" className="block py-2" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            {/* Services for Mobile */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="block w-full text-left py-2 flex items-center justify-between"
            >
              Services{" "}
              {servicesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="pl-4 flex flex-col gap-2 text-sm"
                >
                  {allServices.map((cat, idx) => (
                    <div key={idx}>
                      <button
                        className="w-full text-left flex items-center justify-between text-orange-600"
                        onClick={() => toggleCategory(cat.title)}
                      >
                        {cat.title}
                        {openCategory === cat.title ? (
                          <ChevronUp size={12} />
                        ) : (
                          <ChevronDown size={12} />
                        )}
                      </button>
                      <AnimatePresence>
                        {openCategory === cat.title && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="ml-4 mt-1 flex flex-col gap-1"
                          >
                            {cat.subServices.map((sub, i) => (
                              <span
                                key={i}
                                className="cursor-pointer text-gray-700 hover:text-orange-500"
                                onClick={() => handleSubClick(sub)}
                              >
                                {sub}
                              </span>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Projects for Mobile */}
            <button
              onClick={() => setProjectsOpen(!projectsOpen)}
              className="block w-full text-left py-2 flex items-center justify-between"
            >
              Projects{" "}
              {projectsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {projectsOpen && (
              <div className="pl-4">
                <Link
                  to="/projects/completed"
                  className="block py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Completed
                </Link>
                <Link
                  to="/projects/ongoing"
                  className="block py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Ongoing
                </Link>
              </div>
            )}

            <Link to="/about" className="block py-2" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" className="block py-2" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
