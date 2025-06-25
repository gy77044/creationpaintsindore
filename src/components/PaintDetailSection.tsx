import React from 'react';

interface PaintDetailSectionProps {
  id: number;
  PaintTitle: string;
  PaintDetail: string;
  paintImg: string;
}

const PaintDetailSection: React.FC<PaintDetailSectionProps> = ({
  id,
  PaintTitle,
  PaintDetail,
  paintImg,
}) => {
  return (
    <section
      id={`${id}`}
      className="w-full bg-white px-4 sm:px-6 md:px-20 py-12 md:py-20"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-8">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#202020] mb-4 sm:mb-6">
            {PaintTitle}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
            {PaintDetail}
          </p>

          <br/>
          <br/>
          <br/>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-black font-medium hover:underline"
          >
            <span className="bg-yellow-400 text-black rounded-full p-2 rotate-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
         
          </a>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={paintImg}
            alt={PaintTitle}
            className="w-full max-w-[500px] h-auto object-contain rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default PaintDetailSection;
