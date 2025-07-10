import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import blackbalti from '../assests/blackbalti.png';
import orangebalti from '../assests/orangebalti.png';
import pinkbalti from '../assests/pinkbalti.png';
import smallbalti from '../assests/smallbalti.png';
import tank from '../assests/tank.png';
import greenbalti from '../assests/greenbalti.png';
import acrylicbalti from '../assests/acrylicbalti.png';
import PaintDetailSection from "../components/PaintDetailSection";
import distemper from '../assests/dd.jpg';
import som from '../assests/som.jpg';
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const blogCards = [
  {
    id: 0,
    title: "CREATION Metallic Emulsion | Rich Metallic Finish | Premium Interior Wall Paint | Luxury Look | Smooth Sheen Effect | Long-Lasting Color",
    category: "Premium",
    img: smallbalti,
    description: "Creation Paints' Metallic Paints bring elegance and shine to your walls with a smooth, reflective finish. Ideal for feature walls, they offer durability, luxury, and a rich decorative appeal.",
  },
  {
    id: 1,
    title: "Creation Platinum Luxury Emulsion | High Gloss Finish | Ultra-Rich Look | Premium Interior Paint | Elegant Sheen | Long-Lasting Brilliance",
    category: "Premium",
    img: blackbalti,
    description: "Creation Platinum Luxury Emulsion delivers a dazzling high-gloss finish with a rich, premium feel. Perfect for elegant interiors needing long-lasting brilliance, smoothness, and superior washability",
  },
  {
    id: 2,
    title: "CREATION Exterior Sheen Emulsion | Weather-Resistant Finish | Durable Exterior Paint | Rich Sheen | UV Protection | Vibrant Colors for Outer Walls",
    category: "Premium",
    img: greenbalti,
    description: "CreationPaints Exterior Sheen Emulsion offers a weather-resistant, glossy finish for outer walls. Long-lasting protection, vibrant look, and UV resistance—perfect for all seasonal conditions.",
  },
  {
    id: 3,
    title: "CREATION Interior Emulsion | Smooth Matte Finish | Elegant Wall Paint | Easy-to-Clean | Low Odor | Rich Colors for Interior Walls",
    category: "Premium",
    img: pinkbalti,
    description: "CreationPaints Interior Emulsion brings a soft matte finish to your walls. Ideal for modern interiors, it’s low-odor, washable, and delivers vibrant, long-lasting color effortlessly",
  },
  {
    id: 4,
    title: "CREATION Acrylic Primer | Interior & Exterior Use | Superior Adhesion | Smooth Base Coat | Quick Dry | Enhances Paint Durability",
    category: "Premium",
    img: acrylicbalti,
    description: "CreationPaints Acrylic Primer offers excellent adhesion and a smooth base coat for all surfaces. Ideal for both interiors and exteriors, ensuring lasting paint performance and durability.",
  },
  {
    id: 5,
    title: "CREATION Acrylic Distemper | Smooth Matte Finish | Affordable Wall Paint | Easy Application | Quick Dry | Ideal for Interiors",
    category: "Premium",
    img: orangebalti,
    description: "CreationPaints Acrylic Distemper delivers a smooth, matte finish at an economical price. Perfect for interior walls, it offers easy application, quick drying, and vibrant coverage",
  },
  {
    id: 6,
    title: "Creation Acrylic Distemper | 1 - 4 Kilogram Packet | Distemper | Multipurpose Use | Durable Base Coat | Ideal for Large-Scale Projects",
    category: "Premium",
    img: distemper,
    description: "CreationPaints Acrylic Distemper Packet is Strong adhesion, fast-drying, and eco-safe formula for both interior and exterior surfaces.",
  },
  {
    id: 7,
    title: "Creation Som Acrylic Distemper | 1 - 4 Kilogram Packet | Distemper | Multipurpose Use | Durable Base Coat | Ideal for Large-Scale Projects",
    category: "Premium",
    img: som,
    description: "CreationPaints Acrylic Distemper Packet is Strong adhesion, fast-drying, and eco-safe formula for both interior and exterior surfaces.",
  },
  {
    id: 8,
    title: "Eco Ext./Int. Primer | 50 Litre Drum | Heavy-Duty Primer | Multipurpose Use | Durable Base Coat | Ideal for Large-Scale Projects",
    category: "Premium",
    img: tank,
    description: "CreationPaints Eco Ext./Int. Primer in a 50-litre drum is perfect for bulk application. Strong adhesion, fast-drying, and eco-safe formula for both interior and exterior surfaces.",
  },
];


const ProductPage: React.FC = () => {
  const nav = useLocation(),route = useNavigate();
  const product = blogCards.filter(el=> `#${el.id}` == nav.hash);
  if(product && !product.length){
    route('/');
  };
  
  return (<>
             
              <br/>
              <br/>
               <PaintDetailSection id={product?.[0].id}  paintImg={product?.[0].img} PaintTitle={product?.[0].title} PaintDetail={product?.[0].description}/>
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">      
      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {blogCards.map((card, index) => (
          <Link to={`/product#${card.id}`} className="rounded overflow-hidden shadow-lg flex flex-col">
            <div className="relative">
              <img className="w-full" src={card.img} alt={card.title} />
              <div className="hover:bg-transparent transition duration-300 absolute inset-0 bg-indigo-900/25 opacity-25" />
              <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                {card.category}
              </div>
            </div>
            <div className="px-6 py-4 mb-auto">
              <a href="#" className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
                {card.title}
              </a>
              <p className="text-gray-500 text-sm">{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
 
  </>
  );
};

export default ProductPage;
