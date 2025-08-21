import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaLeaf,
  FaRecycle,
  FaHandsHelping,
  FaFlask,
  FaUtensils,
  FaProjectDiagram,
  FaTint,
} from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// ✅ Import your custom icons
import retailIcon from "../assets/retail.png";
import devIcon from "../assets/dev.png";

const allServices = [
  {
    title: "Food & Feed Safety",
    icon: <FaUtensils />,
    subServices: [
      "APEDA",
      "FSSC22000",
      "ISO22000",
      "BRCGS",
      "IFSFood",
      "HACCP",
      "GMP",
      "Halal",
      "Kosher",
      "Organic",
      "NonGMO",
      "GlutenFree",
      "Vegan",
      "SQF Certification",
      "GMPPlus",
    ],
  },
  {
    title: "Pharma & Nutraceutical",
    icon: <FaFlask />,
    subServices: [
      "ICHQ7",
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
    subServices: ["SA8000", "BSCI Compliance", "Sedex SMETA", "RTRS", "FSC"],
  },
  {
    title: "Quality & Environment",
    icon: <FaRecycle />,
    subServices: ["ISO9001", "ISO14001", "ISO45001", "ISO50001", "IATF16949"],
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
        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
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
        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
      />
    ),
    subServices: [
      "Hygiene Rating Scheme",
      "Eat Right Scheme",
      "BHOG, Fruits & Vegetables",
      "FSSAI Third Party Audit",
      "Zed Assessment",
      "Food Services Establishments",
      "Restaurants",
"Cafeterias",
"Dhabas",
"Hotels",
"Meat Retail",
"Eat Right Campus",
"School canteens",
"University Campuses canteens",
"Clean Street Food"
    ],
  },
  {
    title: "Specialization",
    icon: <FaTint />,
    subServices: ["Internal Audits", "Gap Analysis", "Food Safety Audits"],
  },
];

// Map sub-service names to routes
const subServiceRoutes = {
  APEDA: "/services/apeda",
  Auditing: "/services/auditing",
  BRCGS: "/services/brcgs",
  "BSCI Compliance": "/services/bsci-compliance",
  "EFfCI GMP": "/services/effci_gmp",
  "Export Inspection Council": "/services/exportinspectioncouncil",
  FAMIQS: "/services/famiqs",
  FDA: "/services/fda",
  "Foreign Supplier Verification": "/services/foreignsuppliereverification",
  FSC: "/services/fsc",
  FSSC22000: "/services/fssc22000",
  GDP: "/services/gdp",
  "Gluten Free": "/services/glutenfree",
  GMP: "/services/gmp",
  GMPPlus: "/services/gmpplus",
  HACCP: "/services/haccp",
  Halal: "/services/halal",
  IATF16949: "/services/iatf16949",
  ICHQ7: "/services/ichq7",
  IFSFood: "/services/ifsfood",
  ISO9001: "/services/iso9001",
  ISO13485: "/services/iso13485",
  ISO14001: "/services/iso14001",
  ISO15378: "/services/iso15378",
  ISO22000: "/services/iso22000",
  ISO22716: "/services/iso22716",
  ISO45001: "/services/iso45001",
  ISO50001: "/services/iso50001",
  Kosher: "/services/kosher",
  NonGMO: "/services/nongmo",
  Nutraceutical: "/services/nutraceutical",
  Organic: "/services/organic",
  "Project Management Consultancy": "/services/projectmanagementconsultancy",
  RSPO: "/services/rspo",
  RTRS: "/services/rtrs",
  SA8000: "/services/sa8000",
  "Sedex SMETA": "/services/sedexsmeta",
  "US FDA Registration": "/services/usfdaregistration",
  Vegan: "/services/vegan",
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
  "Food Safety Audits": "/services/foodsafety",
  "SQF Certification": "services/sqf",
};

const ServicesGrid = () => {
  const [search, setSearch] = useState("");
  const [openService, setOpenService] = useState(null);
  const navigate = useNavigate();

  const filteredServices = allServices.filter((service) => {
    const matchesTitle = service.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesSub =
      service.subServices &&
      service.subServices.some((sub) =>
        sub.toLowerCase().includes(search.toLowerCase())
      );
    return matchesTitle || matchesSub;
  });

  const handleSubServiceClick = (sub) => {
    const route = subServiceRoutes[sub];
    if (route) {
      window.scrollTo(0, 0); // Scroll to top before navigation
      navigate(route);
    } else {
      alert(`No page linked for: ${sub}`);
    }
  };

  const toggleService = (title) => {
    setOpenService(openService === title ? null : title);
  };

  return (
    <section
      id="services"
      className="py-16 bg-gradient-to-br from-white via-lime-50 to-green-100 px-6"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-orange-500 mb-3">
          We’re Providing Best Quality Service
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-sm mb-6">
          Our expertise in Industry’s solution. We help clients improve
          performance, mitigate risks, and build sustainable, trustworthy
          businesses.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search for a service..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredServices.length > 0 ? (
          filteredServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md transition-all cursor-pointer"
              onClick={() => toggleService(service.title)}
            >
              {/* Main Service */}
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl text-white bg-orange-500 p-4 rounded-full mb-4 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-md font-semibold text-red-950 flex items-center justify-center gap-2">
                  {service.title}
                  {openService === service.title ? (
                    <FaChevronUp className="text-orange-500 text-sm" />
                  ) : (
                    <FaChevronDown className="text-orange-500 text-sm" />
                  )}
                </h3>
                <p className="text-xs text-gray-500 mt-2">Tap to explore more</p>
              </div>

              {/* Sub-Services (Expand on Click) */}
              <AnimatePresence>
                {openService === service.title && service.subServices && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 overflow-hidden"
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {service.subServices.map((sub, idx) => (
                        <div
                          key={idx}
                          className="bg-orange-50 px-3 py-2 rounded-md hover:bg-orange-100 cursor-pointer text-center text-sm break-words min-w-[100px]"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent closing parent on click
                            handleSubServiceClick(sub);
                          }}
                        >
                          {sub}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        ) : (
          <p className="col-span-3 text-gray-500 text-center text-sm">
            No services found.
          </p>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;
