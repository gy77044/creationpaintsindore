import { motion } from 'framer-motion';
import React from 'react';
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
      <ParallaxSection image="../../public/assests/smallbalti.png" text="Welcome to Creative Paints" />
      <ParallaxSection image="../../public/assests/blackbalti.png"  text="Discover Beautiful Interiors" />
      <ParallaxSection image="../../public/assests/greenbalti.png"  text="Design Your Dream Home" />
      <ParallaxSection image="../../public/assests/pinkbalti.png" text="Eco-friendly Colors" />
      <ParallaxSection image="../../public/assests/acrylicbalti.png" text="Discover Beautiful Interiors" />
      <ParallaxSection image="../../public/assests/orangebalti.png" text="Design Your Dream Home" />
      <ParallaxSection image="../../public/assests/dd.jpg" text="Best Wall Distemper" />
      <ParallaxSection image="../../public/assests/tank.png" text="Eco-friendly Colors" />
    </div>
  );
};

export default PaintProductCards;
