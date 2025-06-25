import React from "react";

interface ImageCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  buttonText?: string;
  onClick?: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageSrc,
  altText,
  title,
  description,
  buttonText = "Explore Now",
  onClick,
}) => {
  return (
    <div className="relative h-80 sm:h-96 md:h-full w-full box-border  overflow-hidden shadow-md">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      <div className="absolute bottom-0 w-full bg-white/90 p-4 sm:p-6 text-center">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4 transition-transform duration-300 hover:scale-105">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
          {description}
        </p>
        <button
          onClick={onClick}
          className="border border-yellow-600 text-yellow-700 px-5 sm:px-8 md:px-16 py-2 sm:py-3  hover:bg-yellow-100 hover:scale-105 transition-transform duration-300"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
