import React from "react";


export type ImageDataItem = {
  title: string;
  src: string;
};

type HeroProps = {
  imageData: ImageDataItem[];
};

const Hero: React.FC<HeroProps> = ({ imageData }) => {

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="w-[90dvw] h-[80dvh] mx-auto border-4 border-white bg-white transition-all duration-700 ease-in-out hover:shadow-[6px_6px_10px_5px_gray] overflow-hidden flex">
      {imageData.map((item, index) => (
        <div
          key={index}
          className="group relative h-full flex-shrink-0 transition-all duration-500 ease-in-out hover:w-[50%] w-[33.4%] border-l-2 border-white overflow-hidden"
        >
          <img
            src={item.src}
            alt={item.title}
            className="h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute bottom-0 w-full bg-[rgba(89,89,89,0.4)] transition-all duration-500 ease-in">
            <a
              href="#"
              className="block text-white capitalize no-underline text-[110%] p-5"
            >
              {item.title}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
