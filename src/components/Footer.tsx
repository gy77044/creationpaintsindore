import React from "react";
import logo from "../assests/logo.png"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const navLinks = [
  {
    heading: "Pages",
    items: [
      "Product",
      "Gallery",
      "Shades",
      "About Us",
      "Company",
    ],
  },
  {
    heading: "Support",
    items: ["creationpaints1106@gmail.com  "],
  },
  {
    heading: "Contact",
    items: ["+91 9753074776", "+91 9111066872 "],
  },
  {
    heading: "Address",
    items: ["MVJW+HR8, Unnamed Road, Dinesh Nagar, Palda, Indore, Madhya Pradesh 452020"],
  },
];

const iconClass =
  "w-6 h-6 text-white hover:text-[#ba6e9c] transition duration-150 cursor-pointer";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo and Social Icons */}
        <div className="space-y-4 col-span-1">
          <img
            src={logo}
            alt="Creation Paints Logo"
            className="h-50 w-auto"
          />
          <div className="flex gap-4">
            <a href="https://www.facebook.com/people/Creation-Paints/61575989485753/#"> <FaFacebookF className={iconClass} /> </a>
            <a href="https://www.instagram.com/creation_paints/"><FaInstagram className={iconClass} /></a>
           <a href="https://www.facebook.com/people/Creation-Paints/61575989485753/#"> <FaLinkedinIn className={iconClass} /></a>
           <a href="https://www.facebook.com/people/Creation-Paints/61575989485753/#"> <FaPinterestP className={iconClass} /></a>
            <a href="https://www.facebook.com/people/Creation-Paints/61575989485753/#"><FaXTwitter className={iconClass} /></a>
          </div>
        </div>

        {/* Nav Links */}
        {navLinks.map((section, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg font-semibold text-white">
              {section.heading}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="text-gray-300 hover:text-[#ba6e9c] cursor-pointer text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-center text-gray-400">
        <p>&copy; 2025 Creation Paints India</p>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <a href="#" className="hover:text-[#ba6e9c]">
            Disclaimer
          </a>
          <span>|</span>
          <a href="#" className="hover:text-[#ba6e9c]">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:text-[#ba6e9c]">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
