import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const clients = [
  {
    name: "ABC",
    description: "India's leading Ayurvedic products company.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Dabur_Logo.svg/2560px-Dabur_Logo.svg.png",
  },
  {
    name: "DEF",
    description: "Famous for biscuits and confectionery.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Parle_Products_Logo.svg/2560px-Parle_Products_Logo.svg.png",
  },
  {
    name: "GHI",
    description: "Global food and beverage leader.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Nestle_textlogo.svg/2560px-Nestle_textlogo.svg.png",
  },
  {
    name: "JKL",
    description: "Leading dairy cooperative in India.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Amul_The_Taste_of_India.svg/2560px-Amul_The_Taste_of_India.svg.png",
  },
  {
    name: "MNO's",
    description: "Famous snacks and sweets manufacturer.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Haldiram%27s_logo.svg/2560px-Haldiram%27s_logo.svg.png",
  },
  {
    name: "PQR",
    description: "Conglomerate with FMCG, hotels, and more.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/ITC_Limited_Logo.svg/2560px-ITC_Limited_Logo.svg.png",
  },
];

const ClientCarousel = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="text-center">
        <h2 className=" mb-6 relative inline-block text-3xl font-bold text-orange-500 group transition-transform duration-300 hover:-translate-y-1">
          <span className="relative z-10">Clients and Customers</span>
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        rewind={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {clients.map((client, i) => (
          <SwiperSlide key={i}>
            <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md p-4 text-center transition h-full flex flex-col justify-between">
              <img
                src={client.image}
                alt={client.name}
                className="w-24 h-24 mx-auto object-contain mb-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  {client.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {client.description}
                </p>
                <br></br>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientCarousel;
