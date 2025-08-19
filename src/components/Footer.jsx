import { FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-100 border-t border-orange-300 py-6 text-gray-900 mt-0">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">

        {/* Left: Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-orange-800 font-medium">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/#about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
       <Link to="/#services" className="hover:underline">Services</Link>

          <Link to="/projects/completed" className="hover:underline">Projects</Link>
        </div>

        {/* Center: Copyright */}
        <div className="text-center">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-orange-800">Fortune Consultants</span>. All rights reserved.
          <span className="font-bold"> Designed by "MaYa Developers"</span>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 text-orange-800 text-lg justify-center md:justify-end">
          <a
            href="mailto:support@fortuneconsultants.com"
            className="hover:text-orange-950 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-950 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-950 transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
