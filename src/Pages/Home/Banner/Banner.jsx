import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// BANNER IMAGES
import image1 from "../../../assets/image copy 2.png";
import image2 from "../../../assets/image copy.png";
import image3 from "../../../assets/image.png";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const slides = [
  {
    image: image1,
    title: "Join Creative Contests",
    subtitle: "Show your skills, shine your talent & win exciting prizes.",
  },
  {
    image: image2,
    title: "Your Creativity Matters",
    subtitle: "Submit your best work and compete with thousands.",
  },
  {
    image: image3,
    title: "Discover New Contests",
    subtitle: "Art, Article, Logo, Reviews — Everything in one place.",
  },
];

const Banner = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const axiosSecure = useAxiosSecure();

  const handleSearch = async () => {};

  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        effect="fade"
        className="h-[500px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative bg-cover bg-center h-[500px]"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-20">
                {/* Text */}
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 drop-shadow-lg">
                  {slide.title}
                </h1>

                <p className="text-lg md:text-2xl text-white mb-6 opacity-90">
                  {slide.subtitle}
                </p>

                {/* Search Bar */}
                <div className="flex flex-col md:flex-row gap-3 w-full md:w-1/2">
                  <input
                    type="text"
                    placeholder="Search contests by tag (e.g. Logo, Article, Design)"
                    className="input input-bordered w-full"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                  <button
                    onClick={handleSearch}
                    className="btn  text-black btn-primary"
                  >
                    Search
                  </button>
                </div>

                {/* Trending Tags */}
                <div className="mt-4 flex flex-wrap gap-2 text-sm">
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full">
                    #Logo
                  </span>
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full">
                    #Article
                  </span>
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full">
                    #Design
                  </span>
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full">
                    #Review
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
