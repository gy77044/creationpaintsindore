import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blackbalti from '../assests/blackbalti.png';
import orangebalti from '../assests/orangebalti.png';
import pinkbalti from '../assests/pinkbalti.png';
import smallbalti from '../assests/smallbalti.png';
import tank from '../assests/tank.png';
import greenbalti from '../assests/greenbalti.png';
import acrylicbalti from '../assests/acrylicbalti.png';
import distemper from '../assests/dd.jpg';
import som from '../assests/som.jpg';

const products = [
  {
    id: 0,
    title: 'CREATION Metallic Emulsion (W.B.) | Premium Interior Wall Paint | Luxury Look | Smooth Sheen Effect | Long-Lasting Color',
    subtitle: 'CreationPaints Metallic Emulsion offers a luxurious metallic finish for interior walls...',
    features: ['Ultra-smooth luxury finish', 'Long-lasting and durable formula', 'Ideal for interior walls', 'Easy-to-clean surface'],
    image: smallbalti,
  },
  {
    id: 1,
    title: 'Creation Luxury Emulsion | High Gloss Finish | Ultra-Rich Look | Premium Interior Paint | Elegant Sheen | Long-Lasting Brilliance ',
    subtitle: 'Creation Luxury Emulsion delivers a dazzling high-gloss finish with a rich, premium feel...',
    features: ['Smooth matt finish', 'Unique colour experience', 'Good washability'],
    image: blackbalti,
  },
  {
    id: 2,
    title: 'Creation Exterior Emulsion | Weather-Resistant Finish | Durable Exterior Paint | Rich Sheen | UV Protection | Vibrant Colors for Outer Walls',
    subtitle: 'CreationPaints Exterior Sheen Emulsion offers a weather-resistant, glossy finish...',
    features: ['Smooth matt finish for interior walls', 'Available in a variety of shades', 'Best suited for dry interiors', 'Improved indoor air quality'],
    image: greenbalti,
  },
  {
    id: 3,
    title: 'CREATION Interior Emulsion | Smooth Matte Finish | Elegant Wall Paint | Easy-to-Clean | Low Odor | Rich Colors for Interior Walls',
    subtitle: 'CreationPaints Interior Emulsion brings a soft matte finish to your walls...',
    features: ['Smooth silky finish', 'Good Washability', 'Gives a good colour experience', 'Accurate Colours'],
    image: pinkbalti,
  },
  {
    id: 4,
    title: 'CREATION Acrylic Primer | Interior & Exterior Use | Superior Adhesion | Smooth Base Coat | Quick Dry | Enhances Paint Durability',
    subtitle: 'CreationPaints Acrylic Primer offers excellent adhesion and a smooth base coat...',
    features: ['Smooth matt finish', 'Unique colour experience', 'Good washability'],
    image: acrylicbalti,
  },
  {
    id: 5,
    title: 'CREATION Acrylic Distemper | Smooth Matte Finish | Affordable Wall Paint | Easy Application | Quick Dry | Ideal for Interiors',
    subtitle: 'CreationPaints Acrylic Distemper delivers a smooth, matte finish at an economical price...',
    features: ['Ultra-smooth luxury finish', 'Long-lasting and durable formula', 'Ideal for interior walls', 'Easy-to-clean surface'],
    image: orangebalti,
  },
  {
    id: 6,
    title: 'Creation Acrylic Distemper | 1 - 4 Kilogram Packet | Distemper | Multipurpose Use | Durable Base Coat | Ideal for Large-Scale Projects',
    subtitle: 'Strong adhesion, fast-drying, and eco-safe formula for both interior and exterior surfaces.',
    features: ['Smooth matt finish', 'Unique colour experience', 'Good washability'],
    image: distemper,
  },
  {
    id: 7,
    title: 'Creation Som Acrylic Distemper | 1 - 4 Kilogram Packet | Distemper | Multipurpose Use | Durable Base Coat | Ideal for Large-Scale Projects',
    subtitle: 'Strong adhesion, fast-drying, and eco-safe formula for both interior and exterior surfaces.',
    features: ['Smooth matt finish', 'Unique colour experience', 'Good washability'],
    image: som,
  },
  {
    id: 8,
    title: 'Eco Ext./Int. Primer | 50 Litre Drum | Heavy-Duty Primer | Multipurpose Use | Durable Base Coat | Ideal for Large-Scale Projects',
    subtitle: 'Perfect for bulk application. Strong adhesion, fast-drying, and eco-safe formula.',
    features: ['Smooth matt finish', 'Unique colour experience', 'Good washability'],
    image: tank,
  },
];

const ProductCard: React.FC<{
  title: string;
  subtitle: string;
  features: string[];
  image: string;
  id: number;
}> = ({ title, subtitle, image, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product#${id}`)}
      className="min-w-[280px] sm:min-w-[300px] max-w-[300px] flex-shrink-0 bg-white hover:bg-gray-100 hover:shadow-xl transition-all shadow-md px-6 py-10 flex flex-col h-[80vh] border-[0.2vh] border-gray-100 rounded-sm"
    >
      <img
        src={image}
        alt={title}
        className="h-[60%] object-contain mb-4 mx-auto hover:scale-110 transition-all delay-200"
      />
      <h3 className="text-md font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-3">{subtitle}</p>
    </div>
  );
};

const PaintProductCards: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 540);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 540);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        {isMobile ? (
          <div className="flex flex-col gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto no-scrollbar py-4 scroll-smooth"
            >
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PaintProductCards;
