import React, { useState } from "react";
import watercolor from "../assests/allimg/bg-watercolor.jpg";
import mencreation from "../assests/house.png";
import redwall from "../assests/allimg/painting-red-wall.jpg";
import rollon from "../assests/allimg/rollon.jpg";
import roughpaint from "../assests/allimg/roughpaint.jpg";
import bgtheme from "../assests/bg-theme.png";
import blueBrush from "../assests/blue_brush.png";
import whiteImg from "../assests/whiteimag.png";
import yelow from "../assests/top-view-yellow-brush-stroke.jpg";
import rollbrush4 from "../assests/rollbrush4.jpg";

// Images array
const imageUrls = [
  yelow,
  mencreation,
  roughpaint,
  whiteImg,
  bgtheme,
  rollon,
  redwall,
  watercolor,
  blueBrush,
  rollbrush4,
];

const ColourInspirationSection: React.FC = () => {
  const [mainIdx, setMainIdx] = useState(0);

  return (
    <section className="w-full py-6 px-2 md:px-8 max-w-full mx-auto">
      <div className="flex flex-col lg:flex-row justify-between gap-8 items-stretch">
        {/* Left Section */}
        <div className="w-full flex flex-col">
          <div className="bg-white shadow-md p-1 relative overflow-hidden">
            <img
              key={mainIdx} // ensures fade-in transition works
              src={imageUrls[mainIdx]}
              alt={`Main image ${mainIdx + 1}`}
              className="w-full max-h-[500px] h-[36vw] object-cover transition-opacity duration-300 ease-in-out"
              draggable={false}
              loading="eager" // priority load
            />

            {/* Thumbnails */}
            <div className="absolute left-0 bottom-0 w-full overflow-x-auto flex gap-2 p-4 bg-black/20 backdrop-blur-md">
              {imageUrls.map((img, i) => (
                <button
                  key={`thumb-${i}`}
                  onClick={() => setMainIdx(i)}
                  className={`flex-shrink-0 border-2 rounded-sm transition-all ${
                    mainIdx === i ? "border-white shadow-lg" : "border-transparent"
                  }`}
                  style={{ width: "70px", height: "48px" }}
                  aria-label={`Thumbnail ${i + 1}`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    className="object-cover w-full h-full"
                    loading="lazy"
                    draggable={false}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColourInspirationSection;
