// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";
import DefaultHelmet from "./components/DefaultHelmet";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

import Home from "./pages/Home";


import RequestCallback from "./pages/RequestCallback";

// ---- Service Detail Pages ----
import APEDA from "./pages/services/APEDA";
import Auditing from "./pages/services/Auditing";
import BRCGS from "./pages/services/BRCGS";
import BSCICompliance from "./pages/services/BSCICompliance";
import EFfCI_GMP from "./pages/services/EFfCI_GMP";

import ExportInspectionCouncil from "./pages/services/ExportInspectionCouncil";

import ForeignSupplierVerification from "./pages/services/ForeignSupplierVerification";
import FSC from "./pages/services/FSC";
import FSSC22000 from "./pages/services/FSSC22000";
import GDP from "./pages/services/GDP";
import GlutenFree from "./pages/services/GlutenFree";
import GMP from "./pages/services/GMP";
import GMPPlus from "./pages/services/GMPPlus";
import HACCP from "./pages/services/HACCP";
import Halal from "./pages/services/Halal";
import IATF16949 from "./pages/services/IATF16949";
import ICHQ7 from "./pages/services/ICHQ7";
import IFSFood from "./pages/services/IFSFood";
import ISO9001 from "./pages/services/ISO9001";
import ISO13485 from "./pages/services/ISO13485";
import ISO14001 from "./pages/services/ISO14001";
import ISO15378 from "./pages/services/ISO15378";
import ISO22000 from "./pages/services/ISO22000";
import ISO22716 from "./pages/services/ISO22716";
import ISO45001 from "./pages/services/ISO45001";
import ISO50001 from "./pages/services/ISO50001";
import Kosher from "./pages/services/Kosher";
import NonGMO from "./pages/services/NonGMO";

import Organic from "./pages/services/Organic";
import ProjectManagementConsultancy from "./pages/services/ProjectManagementConsultancy";
import RSPO from "./pages/services/RSPO";
import RTRS from "./pages/services/RTRS";
import SA8000 from "./pages/services/SA8000";
import Sedex_SMETA from "./pages/services/Sedex_SMETA";
import USFDARegistration from "./pages/services/USFDARegistration";
import Vegan from "./pages/services/Vegan";
import MSMEZEDCertification from "./pages/services/MSMEZEDCertification";
import HygieneRating from "./pages/services/HygieneRating";
import FoodSafetyAudits from "./pages/services/FoodSafetyAudits";
import EatRightInitiatives from "./pages/services/EatRightInitiatives";
import BHOG from "./pages/services/BHOG";
import ThirdPartyAuditing from "./pages/services/ThirdPartyAuditing";
// import { Import } from "lucide-react";
import SQF from "./pages/services/SQF";
import InternalAudits from "./pages/services/InternalAudits";
import ScrollToTop from "./ScrollTotop";
import GapAnalysis from "./pages/services/GapAnalysis";
function App() {
  return (
    <>
      <DefaultHelmet />
      <Navbar />
      <ScrollToTop />
      <div className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          
          {/* ---- Service Routes ---- */}
          <Route path="/services/apeda" element={<APEDA />} />
          <Route path="/services/auditing" element={<Auditing />} />
          <Route path="/services/brcgs" element={<BRCGS />} />
          <Route
            path="/services/bsci-compliance"
            element={<BSCICompliance />}
          />
          <Route path="/services/effci_gmp" element={<EFfCI_GMP />} />

          <Route
            path="/services/exportinspectioncouncil"
            element={<ExportInspectionCouncil />}
          />
    
          <Route
            path="/services/foreignsuppliereverification"
            element={<ForeignSupplierVerification />}
          />
          <Route path="/services/fsc" element={<FSC />} />
          <Route path="/services/fssc22000" element={<FSSC22000 />} />
          <Route path="/services/gdp" element={<GDP />} />
          <Route path="/services/glutenfree" element={<GlutenFree />} />
          <Route path="/services/gmp" element={<GMP />} />
          <Route path="/services/gmpplus" element={<GMPPlus />} />
          <Route path="/services/haccp" element={<HACCP />} />
          <Route path="/services/halal" element={<Halal />} />
          <Route path="/services/iatf16949" element={<IATF16949 />} />
          <Route path="/services/ichq7" element={<ICHQ7 />} />
          <Route path="/services/ifsfood" element={<IFSFood />} />
          <Route path="/services/iso9001" element={<ISO9001 />} />
          <Route path="/services/iso13485" element={<ISO13485 />} />
          <Route path="/services/iso14001" element={<ISO14001 />} />
          <Route path="/services/iso15378" element={<ISO15378 />} />
          <Route path="/services/iso22000" element={<ISO22000 />} />
          <Route path="/services/iso22716" element={<ISO22716 />} />
          <Route path="/services/iso45001" element={<ISO45001 />} />
          <Route path="/services/iso50001" element={<ISO50001 />} />
          <Route path="/services/kosher" element={<Kosher />} />
          <Route path="/services/nongmo" element={<NonGMO />} />
        
          <Route path="/services/organic" element={<Organic />} />
          <Route
            path="/services/projectmanagementconsultancy"
            element={<ProjectManagementConsultancy />}
          />
          <Route path="/services/rspo" element={<RSPO />} />
          <Route path="/services/rtrs" element={<RTRS />} />
          <Route path="/services/sa8000" element={<SA8000 />} />
          <Route path="/services/sedexsmeta" element={<Sedex_SMETA />} />
          <Route
            path="/services/usfdaregistration"
            element={<USFDARegistration />}
          />
          <Route path="/services/bhog-fruits-vegetables" element={<BHOG />} />
          <Route
            path="/services/zed-assessment"
            element={<MSMEZEDCertification />}
          />
          <Route
            path="/services/eat-right-scheme"
            element={<EatRightInitiatives />}
          />
          <Route
            path="/services/hygiene-rating-scheme"
            element={<HygieneRating />}
          />
          <Route path="/services/vegan" element={<Vegan />} />
          <Route
            path="/services/fssai-third-party-audit"
            element={<ThirdPartyAuditing />}
          />
          <Route path="services/sqf" element={<SQF />} />
          <Route path="/services/foodsafety" element={<FoodSafetyAudits />} />
          <Route
            path="/services/internal-audits"
            element={<InternalAudits />}
          />
          <Route path="/services/gap-analysis" element={<GapAnalysis />} />

          

          <Route path="/requestCallback" element={<RequestCallback />} />
          <Route path="/fcs.com" element={<Home/>}/>
          <Route
            path="*"
            element={
              <>
                <h1 className="p-10 text-center text-2xl">
                  404 - Page Not Found
                </h1>
                <h2 className="p-10 text-center text-2xl">
                  In Progress will be updated Soon
                </h2>
              </>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
