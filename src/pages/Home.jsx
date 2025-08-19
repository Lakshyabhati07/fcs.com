// src/pages/Home.jsx

import HeroSection from "../components/HeroSection";
import ServicesGrid from "../components/ServicesGrid";

import ContactForm from "../components/ContactForm";
import Chatbot from "../components/Chatbot";
import AboutUs from "./AboutUs";
import CoreValues from "../components/CoreValues";
import WhatsAppButton from "../components/WhatsAppButton";
import Certifications from "../components/Certifications";
const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      <HeroSection/>
      <CoreValues/>
      <WhatsAppButton />
      <AboutUs/>
      <Certifications/>
      <ServicesGrid/>
      <ContactForm/>
      <Chatbot/> 
    </div>
  );
};

export default Home;
