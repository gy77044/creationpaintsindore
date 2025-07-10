import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import image1 from "../../assests/allimg/blueIndoor.jpeg";
import image2 from "../../assests/allimg/skyblueIndoor.jpeg";
import image3 from "../../assests/allimg/NaturalGreen.jpeg";
import image4 from "../../assests/allimg/yelloIndor.jpeg";
const images = [image1, image2, image3, image4];
const ProductHighlight: React.FC = () => {
   const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold text-sky-600 transition-transform duration-500 hover:scale-105 hover:shadow-slate-950">
                CreationPaints – Bold Colors, Brilliant Walls
              </h2>
              <p className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 hover:text-orange-500 transition-transform duration-500 hover:scale-105">
                Explore the Vibrant World of CreationPaints
              </p>
              <p className="mt-6 text-base sm:text-lg text-gray-600">
                Discover the Signature Collection from CreationPaints – Expertly
                Formulated Solutions to Beautify, Protect, and Prime Every Wall,
                Inside and Out.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900 animate-new-color-change">
                    <svg
                      className="absolute top-1 left-1 size-5 text-green-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4a2 2 0 0 1-2 2H9v2h2a1 1 0 0 1 1 1v5.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-3 3A1 1 0 0 1 10 21v-7H9a1 1 0 0 1-1-1v-2H5a2 2 0 0 1-2-2V4Zm2 1v4h11V5H5Z" />
                    </svg>
                    Metallic Emulsion (W.B.)—
                  </dt>
                  <dd className="inline">
                    Luxurious water-based emulsion with a shimmering metallic finish, adding elegance, depth, and durability to modern interior walls.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900 animate-new-color-change">
                    <svg
                      className="absolute top-1 left-1 size-5 text-green-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4a2 2 0 0 1-2 2H9v2h2a1 1 0 0 1 1 1v5.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-3 3A1 1 0 0 1 10 21v-7H9a1 1 0 0 1-1-1v-2H5a2 2 0 0 1-2-2V4Zm2 1v4h11V5H5Z" />
                    </svg>
                    Creation Platinum Hi-Gloss WaterBase Enamel—
                  </dt>
                  <dd className="inline">
                    High-gloss water-based enamel with excellent durability, stain resistance, and a mirror-like finish for wood, metal, and wall surfaces.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900 animate-new-color-change">
                    <svg
                      className="absolute top-1 left-1 size-5 text-purple-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M4 3a1 1 0 0 0-1 1v6a2 2 0 0 0 2 2h10v2H9a1 1 0 0 0 0 2h3v6a1 1 0 0 0 1.707.707l3-3a1 1 0 0 0-1.414-1.414L13 19.586V14h2a1 1 0 0 0 1-1v-2h2a2 2 0 0 0 2-2V4a1 1 0 0 0-1-1H4Zm1 2h14v6H5V5Z" />
                    </svg>
                    Creation Luxury Emulsion—
                  </dt>
                  <dd className="inline">
                    Premium interior paint offering a smooth matte finish, rich color, superior washability, and a soft, elegant look for walls.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900 animate-new-color-change">
                    <svg
                      className="absolute top-1 left-1 size-5 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M4 4a1 1 0 0 1 1-1h6v2H6v3h7a1 1 0 0 1 1 1v2H6v3h6v2H5a1 1 0 0 1-1-1V4Zm13.414 7-1.707 1.707a1 1 0 0 0 0 1.414L17 15.414V21a1 1 0 0 0 2 0v-5.586l1.293 1.293a1 1 0 1 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0Z" />
                    </svg>
                    Creation Exterior Emulsion—
                  </dt>
                  <dd className="inline">
                    Weatherproof exterior emulsion providing UV resistance, long-lasting colors, and protection against algae, dirt, and harsh environmental conditions.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900 animate-new-color-change">
                    <svg
                      className="absolute top-1 left-1 size-5 text-yellow-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M4 4a1 1 0 0 1 1-1h6v2H6v3h7a1 1 0 0 1 1 1v2H6v3h6v2H5a1 1 0 0 1-1-1V4Zm13.414 7-1.707 1.707a1 1 0 0 0 0 1.414L17 15.414V21a1 1 0 0 0 2 0v-5.586l1.293 1.293a1 1 0 1 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0Z" />
                    </svg>
                    Creation Interior Emulsion—
                  </dt>
                  <dd className="inline">
                    Smooth, washable interior emulsion delivering excellent coverage, low odor, and lasting beauty to enhance any room’s appearance.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900 animate-new-color-change">
                    <svg
                      className="absolute top-1 left-1 size-5 text-blue-900"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M4 4a1 1 0 0 1 1-1h6v2H6v3h7a1 1 0 0 1 1 1v2H6v3h6v2H5a1 1 0 0 1-1-1V4Zm13.414 7-1.707 1.707a1 1 0 0 0 0 1.414L17 15.414V21a1 1 0 0 0 2 0v-5.586l1.293 1.293a1 1 0 1 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0Z" />
                    </svg>
                    Creation Wooden & Wall-Furniture Acrylic Putty—
                  </dt>
                  <dd className="inline">
                    Acrylic putty for walls and wood surfaces, ensuring smoothness, strong adhesion, easy sanding, and a perfect painting base.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900 animate-new-color-change">
                    <svg
                      className="absolute top-1 left-1 size-5 text-teal-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M4 4a1 1 0 0 1 1-1h6v2H6v3h7a1 1 0 0 1 1 1v2H6v3h6v2H5a1 1 0 0 1-1-1V4Zm13.414 7-1.707 1.707a1 1 0 0 0 0 1.414L17 15.414V21a1 1 0 0 0 2 0v-5.586l1.293 1.293a1 1 0 1 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0Z" />
                    </svg>
                    Creation Hi-Power Pigment Paste—
                  </dt>
                  <dd className="inline">
                    High-strength pigment paste used for tinting paints,
                    ensuring vibrant and consistent color performance across
                    coatings and applications.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900 animate-new-color-change">
                    <svg
                      className="absolute top-1 left-1 size-5 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M4 4a1 1 0 0 1 1-1h6v2H6v3h7a1 1 0 0 1 1 1v2H6v3h6v2H5a1 1 0 0 1-1-1V4Zm13.414 7-1.707 1.707a1 1 0 0 0 0 1.414L17 15.414V21a1 1 0 0 0 2 0v-5.586l1.293 1.293a1 1 0 1 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0Z" />
                    </svg>
                    Creation Acrylic Distemper:—
                  </dt>
                  <dd className="inline">
                    Budget-friendly interior paint with a smooth matte finish, enhanced adhesion, and vibrant colors for a fresh, lasting wall appearance.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <img
             src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
            className="w-3xl w-fit max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 hover:scale-105 transition-all duration-500"
            width="2432"
            height="1442"
          />
           
            <div className="absolute top-4 right-1 flex space-x-2">
              <button
                onClick={prevSlide}
                className="bg-white/70 p-2 rounded-full hover:bg-white shadow transition"
              >
                <ChevronLeftIcon className="w-5 h-5 text-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-white/70 p-2 rounded-full hover:bg-white shadow transition"
              >
                <ChevronRightIcon className="w-5 h-5 text-gray-800" />
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHighlight;
