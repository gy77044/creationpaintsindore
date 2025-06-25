import React, { useState } from "react";
import watercolor from "../../public/assests/allimg/bg-watercolor.jpg";
import mencreation from "../../public/assests/allimg/manwithcreation.png";
import redwall from "../../public/assests/allimg/painting-red-wall.jpg";
import rollon from "../../public/assests/allimg/rollon.jpg";
import roughpaint from "../../public/assests/allimg/roughpaint.jpg";
import bgtheme from "../../public/assests/bg-theme.png";
import blueBrush from "../../public/assests/blue_brush.png";
import whiteImg from "../../public/assests/whiteimag.png";
// Provided images array
const imageUrls = [
  mencreation,roughpaint,whiteImg,bgtheme,rollon,redwall,watercolor
];


const ColourInspirationSection: React.FC = () => {
  const [mainIdx, setMainIdx] = useState(0);

  return (
    <section className="w-full min-h-full py-6 px-2 md:px-8 max-w-[100%] m-auto">
      <div className="max-w-full mx-auto flex flex-col lg:flex-row justify-between gap-8 items-stretch">
        {/* Left: Header, Main Image, Thumbnails */}
        <div className="w-full lg:w-[100%] flex flex-col">
          <div className=" bg-white shadow-md p-1 flex-1 relative overflow-hidden">
            <img
              key={mainIdx}
              src={imageUrls[mainIdx]}
              alt="Colour Inspiration Large"
              className="w-full max-h-[500px] h-[36vw] object-cover transition-all duration-300"
              draggable={false}
            />
     
            {/* Thumbnails */}
            <div className="absolute left-0 bottom-0 w-full flex gap-2 p-4 bg-black/10  backdrop-blur-xl">
              {imageUrls.map((img, i) => (
                <button
                  key={img}
                  className={`overflow-hidden border-2 transition-shadow ${mainIdx===i ? "border-white shadow-lg" : "border-transparent"}`}
                  style={{ width: "70px", height: "48px" }}
                  onClick={() => setMainIdx(i)}
                  aria-label={`Show inspiration image ${i+1}`}
                >
                  <img src={img} alt={`Thumb ${i+1}`} className="object-cover w-full h-full" draggable={false}/>
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