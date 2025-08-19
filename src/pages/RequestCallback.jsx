import { useState } from "react";
import ModalContactForm from "../components/ModalContactForm";

const RequestCallback = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <button
        onClick={() => setOpen(true)}
        className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Request Callback
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-lg p-6">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✖
            </button>
            <ModalContactForm closeModal={() => setOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestCallback;
