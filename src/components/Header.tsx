import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import Marquee from "./Marqee";

const Header = () => {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledDown(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = scrolledDown ? "text-[#111926]" : "text-white";
  const iconHover = scrolledDown ? "hover:text-primary" : "hover:text-yellow-400";

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        scrolledDown
          ? "fixed top-0 bg-[#f8f8f8] shadow-lg"
          : "absolute top-0 bg-[#f8f8f8]"
      }`}
    >
      <div className="px-4 py-2 md:py-4">
        {/* Top Nav */}
        <div className={`flex justify-between items-center text-sm font-light ${textColor}`}>
          {/* <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <span>Connect with us:</span>
            <a href="https://facebook.com" className={`transition-colors ${iconHover}`}><FaFacebookF /></a>
            <a href="#" className={`transition-colors ${iconHover}`}><FaTwitter /></a>
            <a href="mailto:creationpaints1106@gmail.com" className={`transition-colors ${iconHover}`}><FaGoogle /></a>
            <a href="#" className={`transition-colors ${iconHover}`}><FaLinkedinIn /></a>
            <a href="#" className={`transition-colors ${iconHover}`}><FaYoutube /></a>
            <a href="#" className={`transition-colors ${iconHover}`}><FaInstagram /></a>
          </div> */}

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setNavOpen(!navOpen)} className="text-xl">
              {navOpen ? <FaTimes className={textColor} /> : <FaBars className={textColor} />}
            </button>
          </div>
        </div>

        {/* Marquee */}
        {/* <Marquee
  text="Creation Paints Pvt. Ltd. | Address: New RTO Road, Near Tejaji Chowk, Palda, Indore, MP | Email: creationpaints1106@gmail.com | Contact: 9753074776"
  scrolledDown={scrolledDown}
/> */}

        {/* Nav Menu */}
        <nav
          className={`flex-col md:flex md:flex-row md:justify-start md:items-center gap-4 text-sm font-medium transition-all duration-300 mt-2 ${
            navOpen ? "flex" : "hidden md:flex"
          } ${textColor}`}
        >
          <a href="#" className="text-yellow-500 font-semibold hover:text-yellow-400">
            Our Signature Products::
          </a>
          {[
            ["#MetallicEmulsion", "Metallic Emulsion"],
            ["#LuxurySilkEmulsion", "Luxury Silk Emulsion"],
            ["#InteriorExteriorEmulsion", "Interior-Exterior Emulsion"],
            ["#InteriorExteriorPrimer", "Interior-Exterior Primer"],
            ["#WallFurniturePutty", "Wall-Furniture Putty"],
            ["#AcrylicSyntheticDistemper", "Acrylic/Synthetic Distemper"],
            ["#HiPowerPigmentPaster", "Hi-Power Pigment Paster"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className={`hover:text-[#ab4b62] transition-colors text-[#1d365c]`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
