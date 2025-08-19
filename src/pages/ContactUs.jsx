// src/components/ContactUs.jsx

import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-white via-lime-50 to-green-100 py-12 px-4 sm:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 mb-2">
          Feel free to reach us…
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-10">
          We’re here to assist you with any queries or project collaborations.
        </p>

        <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8 text-left space-y-6 max-w-2xl mx-auto">
          <div className="flex items-center gap-4">
            <EnvelopeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-700" />
            <p className="text-sm sm:text-base md:text-lg">
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:fortuneconsultants23@gmail.com"
                className="text-blue-700 underline"
              >
                fortuneconsultants23@gmail.com
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-800" />
            <p className="text-sm sm:text-base md:text-lg">
              <span className="font-semibold">Phone:</span> +91 9761093135
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800">
            FORTUNE <span className="text-green-700">CONSULTANTS</span>
          </h3>
          <p className="text-sm sm:text-md md:text-lg italic mt-1 text-gray-700">
            “<span className="text-green-600">Your Sustainable growth</span>{" "}
            <span className="text-blue-600 font-semibold">Partner</span>”
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
