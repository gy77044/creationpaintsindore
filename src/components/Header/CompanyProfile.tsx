import { animated, useSpring } from '@react-spring/web';
import React, { useEffect, useRef, useState } from 'react';
import COMPANY_IMAGE_URL from "../../assests/house.png";
import BREADCRUMB_BACKGROUND_URL from "../../assests/allimg/roughpaint.jpg";
// Define the URLs for the images
// const BREADCRUMB_BACKGROUND_URL: string = 'https://www.creativepaints.in/upload/pages/2019082817103147.jpg'; // This image seems to be the common header background
const CONTENT_BACKGROUND_PATTERN_URL: string = 'https://www.creativepaints.in/themes/images/pattern/project-description-pattern.jpg'; // Dotted pattern for content section
// const COMPANY_IMAGE_URL: string = 'https://www.creativepaints.in/upload/pages/20190902143442322.jpg'; // Image of the company building

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
        <div className="absolute inset-0 "></div> {/* Black overlay with 50% opacity */}

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
        // style={{
        //   backgroundImage: `url(${CONTENT_BACKGROUND_PATTERN_URL})`,
        //   backgroundRepeat: 'repeat',
        //   backgroundSize: 'auto',
        // }}
      >
        {/* Main Content Layout - Image and Text */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Left Column - Image */}
          <div className="md:w-1/2 w-full flex justify-center md:justify-start">
            <img
              src={COMPANY_IMAGE_URL}
              alt="Creation Paints Company Building"
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
              About Creation Paints
            </h3>
            <p className="mb-4 text-justify leading-relaxed">
              Creation Paints is a leading manufacturer of decorative paint products in India, headquartered in Madhya Pradesh. Founded in 2024, we began our journey with a clear mission — to establish a strong presence in the decorative paints industry. Since then, our dedication to quality, innovation, and customer satisfaction has been the driving force behind our continued success.
            </p>
            <p className="text-justify leading-relaxed">
              We operate our business nationwide, with our headquarters located in Indore, Madhya Pradesh.
            </p>
          </div>
        </div>

        {/* Statistics Section with counting animation */}
        <div className="container mx-auto px-4 mt-16 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <NumberCounter endValue={1000} />
              <p className="text-gray-600 text-lg">Dealers & Distributors</p>
            </div>
            <div className="p-4">
              <NumberCounter endValue={250} />
              <p className="text-gray-600 text-lg">Working Locations</p>
            </div>
            <div className="p-4">
              <NumberCounter endValue={10} />
              <p className="text-gray-600 text-lg">Turnkey Projects</p>
            </div>
            <div className="p-4">
              <NumberCounter endValue={20} />
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