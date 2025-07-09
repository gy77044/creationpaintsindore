import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id={`${id}`}
      className="w-full bg-white px-4 sm:px-6 md:px-20 py-12 md:py-20"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-8">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full md:w-1/2 flex flex-col"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#202020] mb-4 sm:mb-6">
            {PaintTitle}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
            {PaintDetail}
          </p>

          <br />
          <br />
          <br />
          <a
            href="#"
            className="inline-flex items-center gap-2 text-black font-medium hover:underline"
          >
            <span className="bg-yellow-400 text-black rounded-full p-2 hover:rotate-90">
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
        </motion.div>

        {/* Right Side: Image Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <img
            src={paintImg}
            alt={PaintTitle}
            className="w-full max-w-[500px] h-auto object-contain rounded"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PaintDetailSection;
