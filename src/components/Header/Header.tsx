import React, { useState } from 'react';
import img from "../../../public/assests/blackbalti.png"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const navLinks = [
  { href: '#product', label: 'Product' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#shade', label: 'Shades' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Company' },
];

const sliderImagesByLabel: Record<string, string[]> = {
  Product: [
    img,
    img,
    img,
    img,
    img,
    img,
  ],
  Gallery: [
    img,
    img,
    img,
  ],
  'Shades': [
    img,
    img,
    img,
  ],
  'About Us': [
    img,
    img,
    img,
  ],
  'Company': [
    img,
    img,
    img,
  ],
};

const Header: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);
  
  const handleMouseEnter = (label: string) => {
    setHoveredLink(label);
    setSliderIndex(0);
  };

  const showNext = () => {
    if (hoveredLink) {
      const total = sliderImagesByLabel[hoveredLink]?.length || 0;
      setSliderIndex((prev) => (prev + 1) % total);
    }
  };

  const showPrev = () => {
    if (hoveredLink) {
      const total = sliderImagesByLabel[hoveredLink]?.length || 0;
      setSliderIndex((prev) => (prev - 1 + total) % total);
    }
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-gray-900">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5"><span className="font-semibold text-xl text-[#ffae2b] animate-color-change">CreationPaints</span></a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:gap-x-12 relative">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="relative"
              href={`/${link.href}`}
            >
              <span
                className="text-sm font-semibold text-white hover:text-[#ffae2b] hover:scale-110 transition-all duration-200"
              >
                {link.label}
              </span>

              {/* Drawer Slider */}
              {/* {hoveredLink === link.label && (
                <div
                  className="absolute top-full mt-2 bg-white shadow-lg rounded-md transition-all duration-200 w-[90vw] max-w-[600px] h-[400px] z-50 overflow-hidden"
                > */}
                  {/* <div className="p-4 h-full flex flex-col justify-between">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{link.label}</h3>
                    <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                      <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                          transform: `translateX(-${sliderIndex * 100}%)`,
                          width: `${sliderImagesByLabel[link.label].length * 100}%`,
                        }}
                      >
                        {sliderImagesByLabel[link.label].map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`Slide ${idx}`}
                            className="w-[600px] h-[270px] object-contain flex-shrink-0 "
                          />
                        ))}
                      </div>

                      <button
                        onClick={showPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-[#ffae2b] text-black px-2 py-1 rounded-full shadow"
                      >
                        ‹
                      </button>
                      <button
                        onClick={showNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-[#ffae2b] text-black px-2 py-1 rounded-full shadow"
                      >
                        ›
                      </button>
                    </div>
                  </div> */}
                {/* </div>
              )} */}
            </a>
          ))}
        </div>

        {/* Desktop Contact */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/#contact" className="text-sm font-semibold text-white hover:text-[#ffae2b] hover:scale-110 transition-all duration-200">
            Contact Us <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white overflow-y-auto p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
               <span className="font-semibold text-[#ffae2b] animate-color-change">CreationPaints</span>
            </a>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-[#ffae2b] hover:scale-105 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#contactUs"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-[#ffae2b] hover:scale-105 transition-all duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
