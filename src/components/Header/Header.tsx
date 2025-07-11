import React, { useState } from 'react';
import img from "../assests/blackbalti.png";
import { Link } from 'react-router-dom';

// Define a type for your navigation links, including an optional dropdown
interface NavLink {
  href: string;
  label: string;
  dropdown?: { name: string; link: string }[]; // Optional array of dropdown items
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home', dropdown: [
      { name: 'Default', link: '/' },
      
    ], },
  {
    href: '/#about',
    label: 'About Us', 
    dropdown: [
      { name: 'Company Profile', link: '/about-us/company-profile' },
      { name: 'Mission & Vision', link: '/about-us/mission-vision' },
      // { name: 'Director Message', link: '/about-us/director-message' },
      // { name: 'RnD', link: '/about-us/rnd' },
      // { name: 'FAQ\'s', link: '/about-us/faqs' },
    ],
  },
   { href: '/gallery', label: 'Gallery',dropdown: [
      { name: 'Default', link: '/' },
      
    ] },
  { href: '/network', label: 'Network' },
  { href: '/dealership', label: 'Dealership' },
  { href: '/contact', label: 'Inquiry' },
];

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === label ? null : label);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setMobileDropdownOpen(null);
    setActiveDropdown(null);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-gray-900 ">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="font-semibold text-xl text-[#ffae2b] animate-color-change">CreationPaints</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
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
            <div
              key={link.label}
              className="relative"
              // Only apply hover handlers if it's the "About Us" link with a dropdown
              onMouseEnter={() => link.label === 'About Us' && link.dropdown && handleMouseEnter(link.label)}
              onMouseLeave={() => link.label === 'About Us' && link.dropdown ? handleMouseLeave() : undefined}
            >
              {link.dropdown && link.label === 'About Us' ? (
                <>
                  <button
                    className={` " text-white text-sm font-semibold mt-[3px] hover:text-[#ffae2b]  flex items-center"`}
                  >
                    {link.label}
                    <svg
                      className={`ml-1 w-4 h-4 transition-transform ${
                        activeDropdown === link.label ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {/* Dropdown Menu */}
                  <ul className={`
                      absolute top-full left-0 bg-white shadow-xl py-2 min-w-[180px] z-20 overflow-hidden
                      transition-all duration-200 ease-in-out
                      ${activeDropdown === link.label ? 'opacity-100 pointer-events-auto pt-1 pb-1' : 'opacity-0 pointer-events-none'}
                  `}>
                    {link.dropdown.map((dropdownItem) => (
                      <li key={dropdownItem.name}>
                        <Link
                          to={dropdownItem.link}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#ffae2b] transition-colors duration-200 text-sm"
                          onClick={handleLinkClick}
                        >
                          {dropdownItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  to={link.href}
                  className="text-sm font-semibold text-white hover:text-[#ffae2b] hover:scale-110 transition-all duration-200"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Contact - Kept as a separate item for consistent right-side placement */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/contact" className="text-sm font-semibold text-white hover:text-[#ffae2b] hover:scale-110 transition-all duration-1000  animate-color-change">
            Order Now <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white overflow-y-auto p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5" onClick={handleLinkClick}>
              <span className="font-semibold text-[#ffae2b] animate-color-change">CreationPaints</span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
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
                  <div key={link.label}>
                    {link.dropdown && link.label === 'ABOUT US' ? (
                      <>
                        <button
                          onClick={() => toggleMobileDropdown(link.label)}
                          className="flex items-center justify-between w-full rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-[#ffae2b] hover:scale-105 transition-all duration-200"
                        >
                          {link.label}
                          <svg
                            className={`ml-1 w-5 h-5 transition-transform ${
                              mobileDropdownOpen === link.label ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </button>
                        {mobileDropdownOpen === link.label && (
                          <ul className="pl-6 mt-2 space-y-1 bg-gray-50 py-2">
                            {link.dropdown.map((dropdownItem) => (
                              <li key={dropdownItem.name}>
                                <Link
                                  to={dropdownItem.link}
                                  onClick={handleLinkClick}
                                  className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-[#ffae2b] transition-colors duration-200"
                                >
                                  {dropdownItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={handleLinkClick}
                        className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-[#ffae2b] hover:scale-105 transition-all duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/#contact" // Assuming /#contact is your general contact page
                  onClick={handleLinkClick}
                  className="block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-[#ffae2b] hover:scale-105 transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
