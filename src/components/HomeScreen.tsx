import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import NaturalGreen from "../assests/allimg/NaturalGreen.jpeg";
import skyblueIndoor from "../assests/allimg/skyblueIndoor.jpeg";
import yelloIndor from "../assests/allimg/yelloIndor.jpeg";
import imgOutdoor from "../assests/outdoor.jpeg";
import imgIndoor from "../assests/WhiteGreenRoom.jpeg";
import AboutCompany from "./AboutCompany";
import Banner from "./Banner/Banner";
import ProductHighlight from "./Banner/ProductHighlight";
import Footer from "./Footer";
import GetInTouchForm from "./GetInTouchForm";
import Header from "./Header/Header";
import ImageCard from "./ImageCard";
import MapLocation from "./MapLocation";
import PaintProductCards from "./PaintProductCard";
import Hero from "./StickSlider";

const imageData = [
  { title: "Luxury", src: NaturalGreen },
  { title: "Royal", src: skyblueIndoor },
  { title: "Wealthy", src: yelloIndor },
];

const HomeScreen = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });

  return (
    <div className="">
      <div className="bg-white">
        <Banner />
      </div>
      <ProductHighlight />

      {/* Animated Section */}
      <section
        ref={sectionRef}
        className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 bg-white p-4 md:p-12 font-Georgia overflow-x-hidden"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ImageCard
            imageSrc={imgIndoor}
            altText="Indoors"
            title="Indoors"
            description="Get inspiration to find the colours and combinations that reflect and embrace who you are - your own personal identity."
            onClick={() => navigate("/indoor")}
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <ImageCard
            imageSrc={imgOutdoor}
            altText="Outdoors"
            title="Outdoors"
            description="Get inspiration and advice on how to find the best colours and long-lasting paint products for your house."
            onClick={() => navigate("/outdoor")}
          />
        </motion.div>
      </section>

      <div id="product" className="scroll-smooth bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-2 text-[#161e32] hover-shadow">
            Your Walls Deserve the Best Product
          </h2>
          <p className="text-center mt-2 text-base sm:text-lg text-gray-600 animate-new-color-change">
            High-performance coatings that don’t just beautify— they protect, preserve, and impress.
          </p>
          <PaintProductCards />
        </div>
      </div>

      <h2 id="gallery" className="scroll-smooth text-3xl font-bold text-center mb-10 text-[#161e32] hover-shadow">
        Gallery
      </h2>
      <p className="mx-1 text-center mt-2 text-base sm:text-lg text-gray-600 animate-new-color-change">
        Discover how CreationPaints brings walls to life — browse real spaces, creative finishes, and inspiring color combinations captured through our customer gallery.
      </p>
      <Hero imageData={imageData} />
      <AboutCompany />
      <GetInTouchForm />
      <MapLocation />

      {/* Brochure and Social Icons Floating */}
      <div className="fixed -right-[83px] hover:-right-[35px] top-1/3 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-50 transition-all delay-700">
        <a
          href="#"
          className="bg-yellow-400 text-black px-6 py-6 rounded-tr-sm rounded-tl-sm shadow transition -rotate-90 mb-8 animate-pulse hover:animate-none"
        >
          e-Brochure
        </a>

        <a
          href="https://wa.me/919753074776"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-1 rounded-full shadow hover:bg-green-600 transition-all duration-300 transform hover:scale-125"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-4 h-4"
          />
        </a>

        <a
          href="https://www.instagram.com/creation_paints/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 p-1 rounded-full shadow hover:bg-pink-600 transition-all duration-300 transform hover:scale-125"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
            alt="Instagram"
            className="w-4 h-4"
          />
        </a>

        <a
          href="https://www.facebook.com/people/Creation-Paints/61575989485753/#"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 p-1 rounded-full shadow hover:bg-blue-800 transition-all duration-300 transform hover:scale-125"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
            className="w-4 h-4"
          />
        </a>
      </div>
    </div>
  );
};

export default HomeScreen;
