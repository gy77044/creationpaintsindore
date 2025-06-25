import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import PaintDetailSection from "../components/PaintDetailSection";
import blueRoom from "../../public/assests/WhiteRoom.jpeg";
import LightGreenRoom from "../../public/assests/LightGreenRoom.jpeg";
import orangeRoom from "../../public/assests/OrangeRoom.jpeg";
import redRoom from "../../public/assests/redRoom.jpeg";
import skyRoom from "../../public/assests/skyblueRoom.jpeg";
import Serene from "../../public/assests/allimg/Serene.jpeg";
import Sereneblue from "../../public/assests/allimg/Sereneblue.jpeg";
import bucketpaint from "../../public/assests/allimg/buckets-paint-floor.jpg";
import greenWall from "../../public/assests/allimg/greenWall.jpeg";
import purpleWall from "../../public/assests/allimg/purpleWall.jpeg";
import Hero from "../components/StickSlider";
import Slider from "react-slick";
import RoomInspirationSection from "../components/RoomInspirationSection";
import Products from "../components/Products";
import ProductHighlightsSection from "../components/ProductHighlightsSection";
import PaintProductCards from "../components/Parallex";
import InteractiveCard from "../components/InteractiveCard";
import HeroSection from "../components/HeroSection";
import ColourInspirationSection from "../components/ColourInspirationSection";
const Indoor = () => {
  const imageData = [
    {
      title: "Luxury Interior",
      src: greenWall,
    },
    {
      title: "Smooth Interior",
      src: purpleWall,
    },
    {
      title: "Shine Interior",
      src: Sereneblue,
    },
  ];

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />

      <Hero imageData={imageData} />
      <PaintDetailSection
        id={0}
        paintImg={bucketpaint}
        PaintTitle="Wall Paints by Creation Paints"
        PaintDetail="Creation Paints' Metallic Paints bring elegance and shine to your walls with a smooth, reflective finish. Ideal for feature walls, they offer durability, luxury, and a rich decorative appeal. Add a touch of luxury and brilliance to your walls with our premium metallic finishes."
      />
      <PaintDetailSection
        id={1}
        paintImg={blueRoom}
        PaintTitle="Blue Paints by Creation Paints"
        PaintDetail="Creation Paints' Metallic Paints bring elegance and shine to your walls with a smooth, reflective finish. Ideal for feature walls, they offer durability, luxury, and a rich decorative appeal. Add a touch of luxury and brilliance to your walls with our premium metallic finishes."
      />
      <PaintDetailSection
        id={2}
        paintImg={LightGreenRoom}
        PaintTitle="Light Green Paints by Creation Paints"
        PaintDetail="Creation Paints' Metallic Paints bring elegance and shine to your walls with a smooth, reflective finish. Ideal for feature walls, they offer durability, luxury, and a rich decorative appeal. Add a touch of luxury and brilliance to your walls with our premium metallic finishes."
      />
      <PaintDetailSection
        id={3}
        paintImg={redRoom}
        PaintTitle="Red Paints by Creation Paints"
        PaintDetail="Creation Paints' Metallic Paints bring elegance and shine to your walls with a smooth, reflective finish. Ideal for feature walls, they offer durability, luxury, and a rich decorative appeal. Add a touch of luxury and brilliance to your walls with our premium metallic finishes."
      />
      <PaintDetailSection
        id={4}
        paintImg={orangeRoom}
        PaintTitle="Orange Paints by Creation Paints"
        PaintDetail="Creation Paints' Metallic Paints bring elegance and shine to your walls with a smooth, reflective finish. Ideal for feature walls, they offer durability, luxury, and a rich decorative appeal. Add a touch of luxury and brilliance to your walls with our premium metallic finishes."
      />
      <PaintDetailSection
        id={5}
        paintImg={skyRoom}
        PaintTitle="Light Sky Paints by Creation Paints"
        PaintDetail="Creation Paints' Metallic Paints bring elegance and shine to your walls with a smooth, reflective finish. Ideal for feature walls, they offer durability, luxury, and a rich decorative appeal. Add a touch of luxury and brilliance to your walls with our premium metallic finishes."
      />
      <Footer />
    </>
  );
};

export default Indoor;
