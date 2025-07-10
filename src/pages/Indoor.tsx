import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LightGreenRoom from "../assests/LightGreenRoom.jpeg";
import orangeRoom from "../assests/OrangeRoom.jpeg";
import blueRoom from "../assests/WhiteRoom.jpeg";
import Sereneblue from "../assests/allimg/Sereneblue.jpeg";
import bucketpaint from "../assests/allimg/buckets-paint-floor.jpg";
import greenWall from "../assests/allimg/greenWall.jpeg";
import purpleWall from "../assests/allimg/purpleWall.jpeg";
import redRoom from "../assests/redRoom.jpeg";
import skyRoom from "../assests/skyblueRoom.jpeg";
import PaintDetailSection from "../components/PaintDetailSection";
import Hero from "../components/StickSlider";
import { div } from "framer-motion/client";

const sections = [
  {
    id: 0,
    img: bucketpaint,
    title:
      "Decorative Paints - Transform Your Space with Creation Paints’ Decorative Finishes",
    detail:
      "Elevate your interiors with Creation Paints' exclusive range of decorative finishes. Designed to add depth, texture, and personality to any space, our paints go beyond color to create a luxurious ambiance tailored to your style. Whether you're aiming for a sleek modern look or a timeless classic feel, our high-quality formulations ensure stunning results with long-lasting beauty. Discover how Creation Paints can help you turn ordinary walls into artistic expressions.",
  },
  {
    id: 1,
    img: blueRoom,
    title: "Soft Light Grey Hue by Creation Paints",
    detail:
      "Experience the perfect balance of elegance and serenity with the Soft Light Grey Hue by Creation Paints. This versatile shade brings a calm and contemporary feel to any room...",
  },
  {
    id: 2,
    img: LightGreenRoom,
    title: "Liril Shade Hue by Creation Paints",
    detail:
      "Refresh your space with the invigorating Liril Shade Hue by Creation Paints—a lively, nature-inspired green that brings a burst of energy and freshness to any room...",
  },
  {
    id: 3,
    img: redRoom,
    title: "Creation Red Hue by Creation Paints",
    detail:
      "Make a bold and timeless statement with the Creation Red Hue by Creation Paints. This rich, vibrant red radiates warmth, passion, and sophistication...",
  },
  {
    id: 4,
    img: orangeRoom,
    title: "Sunrise Shade Hue by Creation Paints",
    detail:
      "Bring warmth and positivity into your space with the Sunrise Shade Hue by Creation Paints. Inspired by the first light of day...",
  },
  {
    id: 5,
    img: skyRoom,
    title: "Electric Blue Hue by Creation Paints",
    detail:
      "Unleash the power of bold expression with the Electric Blue Hue by Creation Paints. This vivid, high-energy shade brings a modern, edgy vibe...",
  },
];

const Indoor = () => {
  const imageData = [
    { title: "Luxury Interior", src: greenWall },
    { title: "Smooth Interior", src: purpleWall },
    { title: "Shine Interior", src: Sereneblue },
  ];

  return (
    <>
      <div className="mt-20 sm:mt-32" />
      <Hero imageData={imageData} />

      {sections.map((section) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { margin: "-100px" });

        return (
          <div className="overflow-x-hidden">
            <motion.div
            key={section.id}
            ref={ref}
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <PaintDetailSection
              id={section.id}
              paintImg={section.img}
              PaintTitle={section.title}
              PaintDetail={section.detail}
            />
          </motion.div>
          </div>
        );
      })}
    </>
  );
};

export default Indoor;
