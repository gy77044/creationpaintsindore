import React, { useRef } from 'react';
import blackbalti from '../../public/assests/blackbalti.png';
import orangebalti from '../../public/assests/orangebalti.png';
import pinkbalti from '../../public/assests/pinkbalti.png';
import smallbalti from '../../public/assests/smallbalti.png';
import tank from '../../public/assests/tank.png';
import greenbalti from '../../public/assests/greenbalti.png';
import acrylicbalti from '../../public/assests/acrylicbalti.png';
import distemper from '../../public/assests/dd.jpg';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 0,
    title: 'CREATION Metallic Emulsion | Premium Interior Wall Paint | Luxury Look | Smooth Sheen Effect | Long-Lasting Color',
    subtitle: 'CreationPaints Metallic Emulsion offers a luxurious metallic finish for interior walls. Smooth application, rich sheen, and lasting elegance—perfect for modern, vibrant, and premium home décor.',
    features: [
      'Ultra-smooth luxury finish',
      'Long-lasting and durable formula',
      'Ideal for interior walls',
      'Easy-to-clean surface',
    ],
    image: smallbalti,
  },
  {
    id: 1,
    title: 'Creation Platinum Luxury Emulsion | High Gloss Finish | Ultra-Rich Look | Premium Interior Paint | Elegant Sheen | Long-Lasting Brilliance ',
    subtitle: 'Creation Platinum Luxury Emulsion delivers a dazzling high-gloss finish with a rich, premium feel. Perfect for elegant interiors needing long-lasting brilliance, smoothness, and superior washability',
    features: [
      'Smooth matt finish',
      'Unique colour experience',
      'Good washability',
    ],
    image: blackbalti,
  },
  {
    id: 2,
    title: 'CREATION Exterior Sheen Emulsion | Weather-Resistant Finish | Durable Exterior Paint | Rich Sheen | UV Protection | Vibrant Colors for Outer Walls',
    subtitle: 'CreationPaints Exterior Sheen Emulsion offers a weather-resistant, glossy finish for outer walls. Long-lasting protection, vibrant look, and UV resistance—perfect for all seasonal conditions',
    features: [
      'Smooth matt finish for interior walls',
      'Available in a variety of shades',
      'Best suited for dry interiors',
      'Improved indoor air quality',
    ],
    image: greenbalti,
  },
  {
    id: 3,
    title: 'CREATION Interior Emulsion | Smooth Matte Finish | Elegant Wall Paint | Easy-to-Clean | Low Odor | Rich Colors for Interior Walls',
    subtitle: 'CreationPaints Interior Emulsion brings a soft matte finish to your walls. Ideal for modern interiors, it’s low-odor, washable, and delivers vibrant, long-lasting color effortlessly',
    features: [
      'Smooth silky finish',
      'Good Washability',
      'Gives a good colour experience',
      'Accurate Colours',
    ],
    image: pinkbalti,
  },
  {
    id: 4,
    title: 'CREATION Acrylic Primer | Interior & Exterior Use | Superior Adhesion | Smooth Base Coat | Quick Dry | Enhances Paint Durability',
    subtitle: 'CreationPaints Acrylic Primer offers excellent adhesion and a smooth base coat for all surfaces. Ideal for both interiors and exteriors, ensuring lasting paint performance and durability',
    features: [
      'Smooth matt finish',
      'Unique colour experience',
      'Good washability',
    ],
    image: acrylicbalti,
  },
  {
    id: 5,
    title: 'CREATION Acrylic Distemper | Smooth Matte Finish | Affordable Wall Paint | Easy Application | Quick Dry | Ideal for Interiors',
    subtitle: 'CreationPaints Acrylic Distemper delivers a smooth, matte finish at an economical price. Perfect for interior walls, it offers easy application, quick drying, and vibrant coverage',
    features: [
      'Ultra-smooth luxury finish',
      'Long-lasting and durable formula',
      'Ideal for interior walls',
      'Easy-to-clean surface',
    ],
    image: orangebalti,
  },
  {
    id: 6,
    title: 'Creation Acrylic Distemper | 1 - 4 Kilogram Packet | Distemper | Multipurpose Use | Durable Base Coat | Ideal for Large-Scale Projects',
    subtitle: 'CreationPaints Acrylic Distemper Packet is Strong adhesion, fast-drying, and eco-safe formula for both interior and exterior surfaces.',
    features: [
      'Smooth matt finish',
      'Unique colour experience',
      'Good washability',
    ],
    image: distemper,
  },
  {
    id: 7,
    title: 'Eco Ext./Int. Primer | 50 Litre Drum | Heavy-Duty Primer | Multipurpose Use | Durable Base Coat | Ideal for Large-Scale Projects',
    subtitle: 'CreationPaints Eco Ext./Int. Primer in a 50-litre drum is perfect for bulk application. Strong adhesion, fast-drying, and eco-safe formula for both interior and exterior surfaces.',
    features: [
      'Smooth matt finish',
      'Unique colour experience',
      'Good washability',
    ],
    image: tank,
  },
];


const ProductCard: React.FC<{
  title: string;
  subtitle: string;
  features: string[];
  image: string;
  id:number
}> = ({ title, subtitle, features, image,id }) => {
  const navigate = useNavigate()
  const handleNavigate = () =>{
    navigate(`/product#${id}`)
  }
  return(
    <div onClick={handleNavigate} className="min-w-[280px] sm:min-w-[300px] max-w-[300px] flex-shrink-0 bg-white hover:bg-gray-100 hover:shadow-xl transition-all shadow-md px-6 py-10 flex flex-col h-[80vh] border-[0.2vh] border-gray-100 rounded-sm">
    <img src={image} alt={title} className="h-[60%] object-contain mb-4 mx-auto hover:scale-125 transition-all delay-200" />
    <h3 className="text-md font-bold text-blue-900 mb-2">
      {title}
    </h3>
    <p className="text-sm text-gray-500 mb-3">{subtitle}</p>
  </div>
  )
};

const PaintProductCards: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar py-4 scroll-smooth">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaintProductCards;
