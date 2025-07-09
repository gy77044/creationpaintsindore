import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Footer from '../Footer';
import Header from './Header';
import { MapPinIcon } from '@heroicons/react/24/solid';
import MapLocation from '../MapLocation';
// Define the URLs for the images
// Correcting this based on the visual in Screenshot 2025-07-08 at 11.50.51 PM.jpg
const MISSION_VISION_HERO_BG: string = '../../../public/assests/network.jpg'; // This URL seems to be a placeholder for the actual eye/paint image from the screenshot.
// If you have the exact URL for the eye/paint background shown in the screenshot, please replace this.
const MAN_PAINTING_IMAGE: string = 'https://www.creativepaints.in/upload/pages/201908281506318363.jpg'; // Replace with actual image URL if you have it!

// Helper component for the counting animation (typed for TSX)
interface NumberCounterProps {
  endValue: number;
  duration?: number;
}

const NumberCounter: React.FC<NumberCounterProps> = ({ endValue, duration = 1000 }) => {
  const [inView, setInView] = useState<boolean>(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [inView]);

  const { number } = useSpring({
    from: { number: 0 },
    number: inView ? endValue : 0,
    delay: 200,
    config: { duration: duration, tension: 120, friction: 14 },
  });

  return (
    <animated.p ref={ref} className="text-5xl md:text-6xl font-bold text-gray-700 mb-2">
      {number.to((n: number) => Math.floor(n))}
    </animated.p>
  );
};

const Network: React.FC = () => {
  return (<>
  <Header/>
    <section id="mission-vision">

      {/* Hero Banner for Mission & Vision */}
      <div
        className="relative py-20 md:py-32 bg-cover bg-center text-white flex items-end justify-center" // Changed items-center to items-end
        style={{ backgroundImage: `url(${MISSION_VISION_HERO_BG})` }}
      >
        {/* Overlay for background opacity */}
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black overlay with 50% opacity */}

        <div className="relative z-10 container mx-auto px-4 text-center pb-8 md:pb-12"> {/* Added pb- for padding bottom */}
          <div className="inner-content-box">
            <div className="title-s2">
              <h1 className="text-5xl md:text-6xl font-extrabold  animate-pulse-scale">Creation Paints Network</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}

      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-12">
 
            <div className="flex justify-between w-full items-center text-2xl font-bold font-serif">
              <p><MapPinIcon className="h-6 w-6"/>Madhya Pradesh</p>
              <p><MapPinIcon className="h-6 w-6"/>Rajasthan</p>
              <p><MapPinIcon className="h-6 w-6"/>Uttar Pradesh</p>
              <p><MapPinIcon className="h-6 w-6"/>Chandighar</p>
              <p><MapPinIcon className="h-6 w-6"/>Maharastra</p>
            </div>
        
        </div>
      </div>
       <MapLocation />
    </section>
    <Footer/></>
  );
};

export default Network;