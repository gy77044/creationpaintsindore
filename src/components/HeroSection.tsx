import React, { useState } from "react";

const slides = [
  {
    image: "https://ext.same-assets.com/305100765/3441984267.jpeg",
    alt: "IPL Teams Banner",
    buttonText: "Watch Now",
    bg: "bg-gradient-to-b from-[#273261] to-[#273261]/90",
  },
  {
    image: "https://ext.same-assets.com/305100765/2752276582.jpeg",
    alt: "IPL Sponsors Banner 1",
    buttonText: "Watch Now",
    bg: "bg-gradient-to-b from-[#273261] to-indigo-900",
  },
  {
    image: "https://ext.same-assets.com/305100765/2752276582.jpeg",
    alt: "IPL Sponsors Banner 2",
    buttonText: "Watch Now",
    bg: "bg-gradient-to-b from-[#273261] to-indigo-900",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative overflow-hidden rounded-xl shadow mb-6">
      {/* Hero Image Slider */}
      <div className="w-full h-[320px] md:h-[440px] flex items-center justify-center bg-[#273261] relative transition-all duration-500">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].alt}
          className="w-full h-full object-cover object-top opacity-95 transition-opacity duration-500"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow mb-2 uppercase tracking-wide">
            Proud Sponsors Of
          </h2>
          <button className="mt-4 px-5 py-2 rounded bg-[#273261] text-white font-semibold shadow hover:bg-[#ab4b62] transition">
            {slides[currentSlide].buttonText}
          </button>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-white bg-[#273261]/70 hover:bg-[#ab4b62]/70 rounded-full h-10 w-10 flex items-center justify-center z-10"
        >
          <span className="sr-only">Previous</span>
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white bg-[#273261]/70 hover:bg-[#ab4b62]/70 rounded-full h-10 w-10 flex items-center justify-center z-10"
        >
          <span className="sr-only">Next</span>
          &#8594;
        </button>
      </div>
    </div>
  );
}
