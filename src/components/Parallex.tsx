import { motion } from 'framer-motion';
import React from 'react';
import blueimage from "../../public/assests/blueimage.png"
const ParallaxSection: React.FC<{ image: string; text: string,text1: string }> = ({ image, text,text1 }) => (
  <div
    className="relative h-screen flex flex-col items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover text-white rounded-sm"
    style={{ backgroundImage: `url(${blueimage})` }}>
    <div className="absolute inset-0  z-0 border-[1vh] border-white rounded-md animate-new-color-change" />
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative z-10 px-6 text-center text-4xl font-bold drop-shadow-lg"
    >
      {text}
    </motion.div>
    <motion.img
      src={image}
      alt="Above Text"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative z-10 w-[300px] h-[400px] object-cover rounded-md mb-4"
    />
     <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative z-10 px-6 text-center text-1xl font-bold drop-shadow-lg"
    >
      {text1}
    </motion.div>
  </div>
);

const PaintProductCards: React.FC = () => {
  return (
    <div>
      <ParallaxSection image="../../public/assests/smallbalti.png" text="Welcome to Creative Paints" text1="CREATION Metallic Emulsion (W.B.) | Premium Interior Wall Paint | Luxury Look | Smooth Sheen Effect | Long-Lasting Color" />
      <ParallaxSection image="../../public/assests/blackbalti.png"  text="Discover Beautiful Interiors" text1="Creation Luxury Emulsion | High Gloss Finish | Ultra-Rich Look | Premium Interior Paint | Elegant Sheen | Long-Lasting Brilliance" />
      <ParallaxSection image="../../public/assests/greenbalti.png"  text="Design Your Dream Home" text1="Creation Exterior Emulsion | Weather-Resistant Finish | Durable Exterior Paint | Rich Sheen | UV Protection | Vibrant Colors for Outer Walls" />
      <ParallaxSection image="../../public/assests/pinkbalti.png" text="Eco-friendly Colors" text1="CREATION Interior Emulsion | Smooth Matte Finish | Elegant Wall Paint | Easy-to-Clean | Low Odor | Rich Colors for Interior Walls" />
      <ParallaxSection image="../../public/assests/acrylicbalti.png" text="Discover Beautiful Interiors" text1="CREATION Acrylic Primer | Interior & Exterior Use | Superior Adhesion | Smooth Base Coat | Quick Dry | Enhances Paint Durability" />
      <ParallaxSection image="../../public/assests/orangebalti.png" text="Design Your Dream Home" text1="CREATION Acrylic Distemper | Smooth Matte Finish | Affordable Wall Paint | Easy Application | Quick Dry | Ideal for Interiors', subtitle: 'CreationPaints Acrylic Distemper delivers a smooth, matte finish at an economical price. Perfect for interior walls, it offers easy application, quick drying, and vibrant coverage"/>
      <ParallaxSection image="../../public/assests/dd.jpg" text="Best Wall Distemper" text1="Creation Acrylic Distemper | 1 - 4 Kilogram Packet | Distemper | Multipurpose Use | Durable Base Coat | Ideal for Large-Scale Projects" />
      <ParallaxSection image="../../public/assests/som.jpg" text="Best Acrylic Distemper" text1="Creation Som Acrylic Distemper | 1 - 4 Kilogram Packet | Distemper | Multipurpose Use | Durable Base Coat | Ideal for Large-Scale Projects" />
      <ParallaxSection image="../../public/assests/tank.png" text="Eco-friendly Colors" text1="Eco Ext./Int. Primer | 50 Litre Drum | Heavy-Duty Primer | Multipurpose Use | Durable Base Coat | Ideal for Large-Scale Projects" />
    </div>
  );
};

export default PaintProductCards;
