import React from 'react';
import { motion } from 'framer-motion';
import blackbalti from "../../public/assests/blackbalti.png"
import bb from "../../public/assests/allimg/assortment.jpg"
import orangebalti from '../../public/assests/orangebalti.png';
import pinkbalti from '../../public/assests/pinkbalti.png';
import smallbalti from '../../public/assests/smallbalti.png';
import tank from '../../public/assests/tank.png';
import greenbalti from '../../public/assests/greenbalti.png';
import acrylicbalti from '../../public/assests/acrylicbalti.png';
import blueBrush from "../../public/assests/blue_brush.png";
const ParallaxSection: React.FC<{ image: string; text: string }> = ({ image, text }) => (
  <div
    className="relative h-screen flex flex-col items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover text-white rounded-sm"
    style={{ backgroundImage: `url(../../public/assests/blue_brush.png)` }}>
    <div className="absolute inset-0  z-0 " />
    <motion.img
      src={image}
      alt="Above Text"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative z-10 w-[200px] h-[200px] object-cover rounded mb-4"
    />
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative z-10 px-6 text-center text-4xl font-bold drop-shadow-lg"
    >
      {text}
    </motion.div>
  </div>
);

const PaintProductCards: React.FC = () => {
  return (
    <div>
      <ParallaxSection image="../../public/assests/blackbalti.png" text="Welcome to Creative Paints" />
      <ParallaxSection image="../../public/assests/orangebalti.png" text="Discover Beautiful Interiors" />
      <ParallaxSection image="../../public/assests/pinkbalti.png" text="Design Your Dream Home" />
      <ParallaxSection image="../../public/assests/smallbalti.png" text="Eco-friendly Colors" />
      <ParallaxSection image="../../public/assests/greenbalti.png" text="Discover Beautiful Interiors" />
      <ParallaxSection image="../../public/assests/acrylicbalti.png" text="Design Your Dream Home" />
      <ParallaxSection image="../../public/assests/tank.png" text="Eco-friendly Colors" />
    </div>
  );
};

export default PaintProductCards;
