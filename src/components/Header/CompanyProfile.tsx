import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from '../Footer';

// Define the URLs for the images
const BREADCRUMB_BACKGROUND_URL: string = 'https://www.creativepaints.in/upload/pages/2019082817103147.jpg'; // This image seems to be the common header background
const CONTENT_BACKGROUND_PATTERN_URL: string = 'https://www.creativepaints.in/themes/images/pattern/project-description-pattern.jpg'; // Dotted pattern for content section
const COMPANY_IMAGE_URL: string = 'https://www.creativepaints.in/upload/pages/20190902143442322.jpg'; // Image of the company building

// Helper component for the counting animation (typed for TSX)
interface NumberCounterProps {
  endValue: number;
  duration?: number;
}

const NumberCounter: React.FC<NumberCounterProps> = ({ endValue, duration = 1000 }) => {
  const [inView, setInView] = useState<boolean>(false);
  const ref = useRef<HTMLParagraphElement>(null); // Specify the type of the ref

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

const CompanyProfile: React.FC = () => {
  return (<>
    <section id="about">
      {/* Breadcrumb Area - Updated for About Us */}
      <div
        className="relative py-20 md:py-32 bg-cover bg-center text-white flex items-end justify-center" // Changed items-center to items-end
        style={{ backgroundImage: `url(${BREADCRUMB_BACKGROUND_URL})` }}
      >
        {/* Overlay for background opacity */}
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black overlay with 50% opacity */}

        <div className="relative z-10 container mx-auto px-4 text-center pb-8 md:pb-12"> {/* Added pb- for padding bottom */}
          <div className="inner-content-box">
            <div className="title-s2">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeInUp">ABOUT US</h1>
              <ul className="flex justify-center space-x-3 mt-4">
                <li className="w-4 h-4 bg-[#ffae2b] rounded-full circle-color1"></li>
                <li className="w-4 h-4 bg-red-500 rounded-full circle-color2"></li>
                <li className="w-4 h-4 bg-[#34d399] rounded-full circle-color3"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area (from previous AboutUs component) */}
      <div
        className="relative py-16 md:py-24 bg-gray-50 overflow-hidden"
        style={{
          backgroundImage: `url(${CONTENT_BACKGROUND_PATTERN_URL})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
        }}
      >
        {/* Main Content Layout - Image and Text */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Left Column - Image */}
          <div className="md:w-1/2 w-full flex justify-center md:justify-start">
            <img
              src={COMPANY_IMAGE_URL}
              alt="Creative Paints Company Building"
              className="w-full max-w-md h-auto object-cover shadow-lg"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="md:w-1/2 w-full text-gray-700">
            <h3
              className="text-2xl md:text-3xl font-semibold mb-4 leading-snug"
              style={{
                backgroundImage: 'linear-gradient(to right, #17a2b8, #dc3545)', // Example teal to red
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Bringing Imagination to surface, Quality Products at Quality Prices, Customer satisfaction is what we prefer
            </h3>
            <p className="mb-4 text-justify leading-relaxed">
              Creative Paints Pvt. Ltd. manufactures a wide range of paints for decorative use and also provides solutions to industrial requirements. The company has come a long way since its beginning back in 1992 starting from supplying the basic raw material required in the manufacturing of paints having a wide range of products in Paints Segment. After being successful in supplying raw material to multiple manufacturers, a step towards further integration was taken and a paint manufacturing unit was established. The company reflects the spirit of its Chairman Director Mr. Sanjay Agrawal who has redefined a brand in the market since 2003. The only paint company in M.P. region with a consistent track record of being one of the fastest growing companies, from past few years.
            </p>
            <p className="text-justify leading-relaxed">
              We carry out business activities all over the country with headquarters at Indore (M.P.).
            </p>
          </div>
        </div>

        {/* Statistics Section with counting animation */}
        <div className="container mx-auto px-4 mt-16 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <NumberCounter endValue={2154} />
              <p className="text-gray-600 text-lg">Dealers & Distributors</p>
            </div>
            <div className="p-4">
              <NumberCounter endValue={1527} />
              <p className="text-gray-600 text-lg">Working Locations</p>
            </div>
            <div className="p-4">
              <NumberCounter endValue={53} />
              <p className="text-gray-600 text-lg">Turnkey Projects</p>
            </div>
            <div className="p-4">
              <NumberCounter endValue={50} />
              <p className="text-gray-600 text-lg">Working Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default CompanyProfile;