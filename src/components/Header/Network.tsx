import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import the map pin icon from react-icons/fa
import MapLocation from '../MapLocation';
import Footer from '../Footer';
import Header from './Header';

// Define the URLs for the images
const NETWORK_HERO_BG: string = 'https://www.creativepaints.in/themes/images/network.jpg';
// REPLACE THIS WITH THE ACTUAL URL OF THE LIGHT GRAY/WHITE INDIA MAP OUTLINE
const INDIA_MAP_BG: string = 'https://www.creativepaints.in/themes/images/map.png'; //

const NETWORK_LOCATIONS: string[] = [
  'Madhya Pradesh', 'Rajasthan', 'Gujarat', 'Maharashtra',
  'Goa', 'Karnataka', 'Hyderabad', 'Chattisgarh',
  'Orissa', 'Uttar Pradesh', 'Meghalaya', 'Assam',
  'Arunachal Pradesh', 'Manipur', 'Mizoram', 'Tripura',
];

const Network: React.FC = () => {
  return (<><Header/>
    <section id="network">
      {/* Hero Banner for OUR NETWORK */}
      <div
        className="relative py-20 md:py-32 bg-cover bg-center text-white flex items-end justify-center"
        style={{ backgroundImage: `url(${NETWORK_HERO_BG})` }}
      >
        {/* Overlay for background opacity */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 container mx-auto px-4 text-center pb-8 md:pb-12">
          <div className="inner-content-box">
            <div className="title-s2">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeInUp">OUR NETWORK</h1>
              <ul className="flex justify-center space-x-3 mt-4">
                <li className="w-4 h-4 bg-[#ffae2b] rounded-full circle-color1"></li>
                <li className="w-4 h-4 bg-red-500 rounded-full circle-color2"></li>
                <li className="w-4 h-4 bg-[#34d399] rounded-full circle-color3"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area - Locations with Faded Map Background */}
      <div
        className="relative py-16 md:py-24 bg-white"
        style={{
          backgroundImage: `url(${INDIA_MAP_BG})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        //   opacity: 0.2, //
        }}
      >
        {/* Actual content overlaying the faded map */}
        <div className="relative z-10 container mx-auto px-4 text-gray-700">
          <h2 className="text-2xl font-bold text-[#17a2b8] mb-8 text-center md:text-left">Depart & Distributors</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
            {NETWORK_LOCATIONS.map((location, index) => (
              <div key={index} className="flex items-center space-x-2">
                <FaMapMarkerAlt className="h-5 w-5 text-gray-500" aria-hidden="true" /> {/* Using react-icons */}
                <span className="text-lg">{location}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <MapLocation/>
    <Footer/>
    </>
  );
};

export default Network;