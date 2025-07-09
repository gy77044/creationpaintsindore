import React, { useState } from 'react';
import img from "../../../public/assests/blackbalti.png";
import { useNavigate } from 'react-router-dom';

const navLinks = [
  { href: '#product', label: 'Product' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#shade', label: 'Shades' },
  { href: '#about', label: 'About Us' },
  { href: '#network', label: 'Network' },
  { href: '#dealers', label: 'Dealership' },
];

const sliderImagesByLabel: Record<string, string[]> = {
  Product: [img, img, img, img, img, img],
  Gallery: [img, img, img],
  Shades: [img, img, img],
  'About Us': [img, img, img],
  Company: [img, img, img],
};

const Header: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [aboutMobileOpen, setAboutMobileOpen] = useState(false);

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
          <a href="/" className="-m-1.5 p-1.5">
            <span className="font-semibold text-xl text-[#ffae2b] animate-color-change">CreationPaints</span>
          </a>
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
          {navLinks.map((link) => {
            const isAbout = link.label === 'About Us';
            return (
              <div key={link.label} className="relative group">
                <a
                  href={`/${link.href}`}
                  className="text-sm font-semibold text-white hover:text-[#ffae2b] hover:scale-110 transition-all duration-200"
                >
                  {link.label}
                </a>

                {/* Dropdown for About Us - Desktop */}
                {isAbout && (
                  <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg z-50 min-w-[180px]">
                    <ul className="flex flex-col py-2">
                      <li>
                        <a
                          href="/about/company"
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-[#ffae2b]"
                        >
                          Company Info
                        </a>
                      </li>
                      <li>
                        <a
                          href="/about/vision"
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-[#ffae2b]"
                        >
                          Vision & Mission
                        </a>
                      </li>                   
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
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
            <a href="/" className="-m-1.5 p-1.5">
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
                {navLinks.map((link) => {
                  const isAbout = link.label === 'About Us';
                  return (
                    <div key={link.label}>
                      {isAbout ? (
                        <>
                          <button
                            onClick={() => setAboutMobileOpen(!aboutMobileOpen)}
                            className="w-full text-left rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-[#ffae2b] flex justify-between items-center"
                          >
                            About Us
                            <span>{aboutMobileOpen ? '▲' : '▼'}</span>
                          </button>
                          {aboutMobileOpen && (
                            <div className="ml-4">
                              <a href="/about/company" className="block px-3 py-1 text-sm text-gray-700 hover:text-[#ffae2b]">Company Info</a>
                              <a href="/about/vision" className="block px-3 py-1 text-sm text-gray-700 hover:text-[#ffae2b]">Vision & Mission</a>
                            </div>
                          )}
                        </>
                      ) : (
                        <a
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-[#ffae2b] hover:scale-105 transition-all duration-200"
                        >
                          {link.label}
                        </a>
                      )}
                    </div>
                  );
                })}
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
