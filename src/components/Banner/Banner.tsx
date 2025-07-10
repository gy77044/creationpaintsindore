import React from "react";
import secondWall from "../../assests/allimg/blueWall.jpeg";
import thirdWall from "../../assests/allimg/green.jpeg";
import fourthWall from "../../assests/allimg/greenWall.jpeg";
import fifthWall from "../../assests/allimg/orangeWall.jpeg";
import redWall from "../../assests/allimg/redwall.jpeg";
import firstWall from "../../assests/allimg/yelloWall.jpeg";
import imgLogo from "../../assests/themewithlogo.png";
import bg from "../../assests/allimg/buckets-paint-floor.jpg";
import { useNavigate } from "react-router-dom";

const Banner: React.FC = () => {
  const navigate = useNavigate()
  const handleCLick = () =>{
    navigate("/contact")
  }
  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden xl:block relative isolate pt-14">
        <div
          className="relative overflow-hidden bg-blue-950/50 bg-blend-soft-light py-32"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Side overlays */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-blue-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-blue-950 to-transparent z-10 pointer-events-none" />

          <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48 relative z-20">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 font-serif sm:text-6xl">
                  Bring Walls To Life With <br />
                  <span className="text-orange-500 animate-color-change ">
                    Creation Paints
                  </span>
                </h1>
                <p className="mt-4 text-xl text-white">
                  High-quality, durable, and vibrant colors for every space.
                </p>
              </div>

              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                    <button onClick={handleCLick} className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="group h-64 w-44 overflow-hidden rounded-lg transition-transform transform duration-500 hover:scale-110 hover:shadow-2xl sm:opacity-0 lg:opacity-100">
                          <img
                            src={secondWall}
                            alt=""
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg transition-transform transform duration-500 hover:scale-110 hover:shadow-2xl sm:opacity-0 lg:opacity-100">
                          <img
                            src={redWall}
                            alt=""
                            className="size-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg transition-transform transform duration-500 hover:scale-110 hover:shadow-2xl sm:opacity-0 lg:opacity-100">
                          <img
                            src={firstWall}
                            alt=""
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg transition-transform transform duration-500 hover:scale-110 hover:shadow-2xl sm:opacity-0 lg:opacity-100">
                          <img
                            src={imgLogo}
                            alt=""
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg transition-transform transform duration-500 hover:scale-110 hover:shadow-2xl sm:opacity-0 lg:opacity-100">
                          <img
                            src={fourthWall}
                            alt=""
                            className="size-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg transition-transform transform duration-500 hover:scale-110 hover:shadow-2xl sm:opacity-0 lg:opacity-100">
                          <img
                            src={thirdWall}
                            alt=""
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg transition-transform transform duration-500 hover:scale-110 hover:shadow-2xl sm:opacity-0 lg:opacity-100">
                          <img
                            src={fifthWall}
                            alt=""
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                <a
                  href="#product"
                  className="inline-block relative z-10 border border-transparent bg-gray-900 px-10 py-4 text-center font-medium text-white hover:scale-110 transition-all duration-500"
                >
                  View Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Layout */}
      <div className="xl:hidden block relative isolate bg-white pt-14">
        <div
          className="mx-auto max-w-7xl py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-blue-950/50 bg-blend-soft-light"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Side overlays */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-blue-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-blue-950 to-transparent z-10 pointer-events-none" />

          <div className="relative z-20 flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Text Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left px-2">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Bring Walls To Life With <br />
                <span className="text-orange-500">Creation Paints</span>
              </h1>
              <p className="mt-4 text-lg text-gray-100 animate-new-color-change">
                High-quality, durable, and vibrant colors for every space.
              </p>
              <a
                href="#product"
                className="mt-8 inline-block border border-transparent bg-gray-900 px-8 py-3 text-white font-medium hover:scale-110 transition-transform"
              >
                View Products
              </a>
            </div>

            {/* Right: Image Grid */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="flex space-x-4">
                <div className="grid grid-cols-1 gap-4">
                  <img
                    src={secondWall}
                    alt=""
                    className="h-40 w-28 sm:h-64 sm:w-44 rounded-lg object-cover hover:scale-110 transition"
                  />
                  <img
                    src={redWall}
                    alt=""
                    className="h-40 w-28 sm:h-64 sm:w-44 rounded-lg object-cover hover:scale-110 transition"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <img
                    src={firstWall}
                    alt=""
                    className="h-40 w-28 sm:h-64 sm:w-44 rounded-lg object-cover hover:scale-110 transition"
                  />
                  <img
                    src={imgLogo}
                    alt=""
                    className="h-40 w-28 sm:h-64 sm:w-44 rounded-lg object-cover hover:scale-110 transition"
                  />
                  <img
                    src={fourthWall}
                    alt=""
                    className="h-40 w-28 sm:h-64 sm:w-44 rounded-lg object-cover hover:scale-110 transition"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <img
                    src={thirdWall}
                    alt=""
                    className="h-40 w-28 sm:h-64 sm:w-44 rounded-lg object-cover hover:scale-110 transition"
                  />
                  <img
                    src={fifthWall}
                    alt=""
                    className="h-40 w-28 sm:h-64 sm:w-44 rounded-lg object-cover hover:scale-110 transition"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
