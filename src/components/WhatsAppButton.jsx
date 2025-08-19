
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const whatsappNumber = "919425832323";
  const message = "Hello, I would like to know more about your services.";

  const handleClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 left-3 sm:left-5 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 z-50"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp size={24} className="sm:size-6" />
    </button>
  );
};

export default WhatsAppButton;
