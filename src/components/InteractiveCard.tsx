import React, { useState } from "react";
import bgcard from "../../public/assests/bgimg.jpg";
import Image1 from "../../public/assests/bgimg.jpg";
import Image2 from "../../public/assests/bgimg.jpg";
import Image3 from "../../public/assests/bgimg.jpg";
import Image4 from "../../public/assests/bgimg.jpg";
import Image5 from "../../public/assests/bgimg.jpg";
import Image6 from "../../public/assests/bgimg.jpg";

const markers = [
  { position: { left: 'left-6 sm:left-20 md:left-28', top: 'top-20 md:top-28' }, label: 'Metallic Emulsion', image: Image4 },
  { position: { left: 'left-40 sm:left-64 md:left-80', top: 'top-44 md:top-72' }, label: 'Acrylic Distemper', image: Image2 },
  { position: { left: 'left-6 sm:left-20 md:left-28', bottom: 'bottom-44 md:bottom-72' }, label: 'Interior Primer', image: Image3 },
  { position: { left: 'left-40 sm:left-64 md:left-80', bottom: 'bottom-6 md:bottom-28' }, label: 'Exterior Emulsion', image: Image1 },
  { position: { right: 'right-64 md:right-80', bottom: 'bottom-9 md:bottom-36' }, label: 'Luxury Silk Emulsion', image: Image5 },
  { position: { right: 'right-36 md:right-56', bottom: 'bottom-9 md:bottom-36' }, label: 'Putty Finish', image: Image6 },
  { position: { right: 'right-6 md:right-28', bottom: 'bottom-9 md:bottom-36' }, label: 'Pigment Paste', image: Image1 },
];

const InteractiveCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center px-4 py-6 sm:py-8 md:py-10 border-t-0 shadow-[0_0_10px_5px_#0003] dark:shadow-[0_0_10px_5px_#fff2]">
      <img src={bgcard} alt="card" className="w-full h-auto object-contain rounded-md" />

      {markers.map((marker, index) => {
        const { left, right, top, bottom } = marker.position;
        const tooltipDirection = top ? 'top' : 'right';
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={index}
            className={`absolute z-10 ${left || ''} ${right || ''} ${top || ''} ${bottom || ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 bg-white/70 dark:bg-black/40 border-[2px] border-white dark:border-gray-300 rounded-full flex items-center justify-center ${
                !isHovered ? 'animate-pulse-scale' : ''
              }`}
            >
              <div className="w-3 h-3 border-2 border-white dark:border-gray-200 rounded-full"></div>
            </div>

            {isHovered && (
              <div
                className={`absolute z-20 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white p-3 rounded-lg shadow-xl w-56 sm:w-64
                  ${tooltipDirection === 'top'
                    ? 'bottom-full mb-3 left-1/2 -translate-x-1/2'
                    : 'top-1/2 left-full ml-3 -translate-y-1/2'}`}
              >
                <img src={marker.image} alt={marker.label} className="w-16 h-16 mx-auto mb-2 object-contain" />
                <p className="text-sm font-semibold text-center">{marker.label}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default InteractiveCard;
