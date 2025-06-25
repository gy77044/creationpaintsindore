// components/Marquee.tsx
import React from 'react';

const Marquee = ({
  text,
  scrolledDown,
}: {
  text: string;
  scrolledDown: boolean;
}) => {
  const bgClass = scrolledDown ? "bg-[#111926]" : "bg-white";
  const textColor = scrolledDown ? "text-white" : "text-[#202020]";

  return (
    <div className={`overflow-hidden whitespace-nowrap w-full p-1 mt-2 ${bgClass}`}>
      <div className="inline-block animate-marquee min-w-full">
        <span className={`text-sm font-thin mx-4 ${textColor}`}>{text}</span>
        <span className={`text-sm font-thin mx-4 ${textColor}`}>{text}</span>
        <span className={`text-sm font-thin mx-4 ${textColor}`}>{text}</span>
      </div>
    </div>
  );
};

export default Marquee;
