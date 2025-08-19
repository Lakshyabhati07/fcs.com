// src/pages/services/HygieneRating.jsx
import React from "react";

const HygieneRating = () => {
  return (
    <section className="min-h-screen py-16 px-6 bg-gradient-to-br from-white via-lime-50 to-green-100">
      <div className="max-w-4xl mx-auto text-justify">
        <h1 className="text-3xl font-bold text-orange-500 mb-4">
          Hygiene Rating
        </h1>
        <p className="text-gray-700 text-base mb-6 leading-relaxed">
          Hygiene Rating has been initiated by FSSAI with the intent of ensuring
          that consumers make informed choices while eating out and also
          encouraging food businesses to showcase and improve their food hygiene
          standards.
        </p>
        <p className="text-gray-700 text-base leading-relaxed">
          Hygiene Rating reflects the standards of food hygiene found on the
          date of inspection by the local authority or recognized third-party
          audit agency. This is a voluntary scheme applicable to food businesses
          supplying food directly to consumers either on or off the premises,
          and food businesses are rated on the basis of food hygiene and safety
          conditions found at the time of inspection.
        </p>
      </div>
    </section>
  );
};

export default HygieneRating;
