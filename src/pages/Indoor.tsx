import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import PaintDetailSection from "../components/PaintDetailSection";
import blueRoom from "../../public/assests/WhiteRoom.jpeg";
import LightGreenRoom from "../../public/assests/LightGreenRoom.jpeg";
import orangeRoom from "../../public/assests/OrangeRoom.jpeg";
import redRoom from "../../public/assests/redRoom.jpeg";
import skyRoom from "../../public/assests/skyblueRoom.jpeg";
import Sereneblue from "../../public/assests/allimg/Sereneblue.jpeg";
import bucketpaint from "../../public/assests/allimg/buckets-paint-floor.jpg";
import greenWall from "../../public/assests/allimg/greenWall.jpeg";
import purpleWall from "../../public/assests/allimg/purpleWall.jpeg";
import Hero from "../components/StickSlider";
import RoomInspirationSection from "../components/RoomInspirationSection";
import Products from "../components/Products";
import ProductHighlightsSection from "../components/ProductHighlightsSection";
import PaintProductCards from "../components/Parallex";
import InteractiveCard from "../components/InteractiveCard";
import HeroSection from "../components/HeroSection";
import ColourInspirationSection from "../components/ColourInspirationSection";

const Indoor = () => {
  const imageData = [
    { title: "Luxury Interior", src: greenWall },
    { title: "Smooth Interior", src: purpleWall },
    { title: "Shine Interior", src: Sereneblue },
  ];

  return (
    <>
      <Header />
      <div className="mt-20 sm:mt-32" />
      <Hero imageData={imageData} />

      <PaintDetailSection
        id={0}
        paintImg={bucketpaint}
        PaintTitle="Decorative Paints - Transform Your Space with Creation Paints’ Decorative Finishes"
        PaintDetail="Elevate your interiors with Creation Paints' exclusive range of decorative finishes. Designed to add depth, texture, and personality to any space, our paints go beyond color to create a luxurious ambiance tailored to your style. Whether you're aiming for a sleek modern look or a timeless classic feel, our high-quality formulations ensure stunning results with long-lasting beauty. Discover how Creation Paints can help you turn ordinary walls into artistic expressions."
      />
      <PaintDetailSection
        id={1}
        paintImg={blueRoom}
        PaintTitle="Soft Light Grey Hue by Creation Paints"
        PaintDetail="Experience the perfect balance of elegance and serenity with the Soft Light Grey Hue by Creation Paints. This versatile shade brings a calm and contemporary feel to any room, making it ideal for both modern and classic interiors. Its gentle undertone complements a wide range of décor styles—whether you're designing a cozy bedroom, a minimalist living space, or a professional office. Crafted with premium pigments and smooth coverage, this light grey finish offers a refined touch that transforms walls into works of subtle beauty."
      />
      <PaintDetailSection
        id={2}
        paintImg={LightGreenRoom}
        PaintTitle="Liril Shade Hue by Creation Paints"
        PaintDetail="Refresh your space with the invigorating Liril Shade Hue by Creation Paints—a lively, nature-inspired green that brings a burst of energy and freshness to any room. Reminiscent of cool breezes and lush leaves, this vibrant hue adds a touch of the outdoors to your interiors. Perfect for accent walls, creative corners, or full-room makeovers, the Liril shade is designed to uplift moods and create a rejuvenating atmosphere. With superior coverage and a smooth, matte finish, Creation Paints ensures your walls radiate beauty and vibrance."
      />
      <PaintDetailSection
        id={3}
        paintImg={redRoom}
        PaintTitle="Creation Red Hue by Creation Paints"
        PaintDetail="Make a bold and timeless statement with the Creation Red Hue by Creation Paints. This rich, vibrant red radiates warmth, passion, and sophistication—perfect for creating dramatic feature walls or energizing entire spaces. Whether used in modern interiors or traditional settings, this hue brings depth and character to any room. Crafted with high-quality pigments for intense color and flawless finish, Creation Red is more than just paint—it’s a reflection of confidence and style."
      />
      <PaintDetailSection
        id={4}
        paintImg={orangeRoom}
        PaintTitle="Sunrise Shade Hue by Creation Paints"
        PaintDetail="Bring warmth and positivity into your space with the Sunrise Shade Hue by Creation Paints. Inspired by the first light of day, this soft yet radiant tone blends gentle orange and golden undertones to create a cozy, uplifting ambiance. Ideal for living rooms, bedrooms, or creative spaces, Sunrise adds a natural glow that makes any room feel welcoming and full of life. With superior quality, smooth application, and long-lasting vibrance, this shade is perfect for those who want to start every day with a burst of inspiration."
      />
      <PaintDetailSection
        id={5}
        paintImg={skyRoom}
        PaintTitle="Electri Blue Hue by Creation Paints"
        PaintDetail="Unleash the power of bold expression with the Electric Blue Hue by Creation Paints. This vivid, high-energy shade brings a modern, edgy vibe to any space—perfect for those who dare to be different. Its striking blue tone instantly grabs attention, making it ideal for feature walls, creative studios, or stylish interiors that demand a touch of drama. With smooth application and long-lasting brilliance, Electric Blue delivers both impact and elegance in every stroke."
      />

      <Footer />
    </>
  );
};

export default Indoor;
