import React from "react";

const cardData = [
  {
    title: "Free On-Site Consultation",
    desc: "Book a free consultation from our experts that will visit your site...",
    img: "http://d3f1ozwy5sre8y.cloudfront.net/s3fs-public/2023-10/Free%20On-Site%20Consultation_1.png?format=webp&width=384&quality=75",
    link: "Read More",
  },
  {
    title: "Accurate & Specific Quotation",
    desc: "Receive precise quotations and advice about the finish that’ll...",
    img: "http://d3f1ozwy5sre8y.cloudfront.net/s3fs-public/2023-10/Free%20On-Site%20Consultation_1.png?format=webp&width=384&quality=75",
    link: "Read More",
  },
  {
    title: "Certified Painters",
    desc: "Our professional painters have been trained and certified to provide...",
    img: "https://d3f1ozwy5sre8y.cloudfront.net/s3fs-public/2023-10/Certified%20Painters.png?format=webp&width=384&quality=75",
    link: "Read More",
  },
  {
    title: "Mechanised Tools",
    desc: "We use Mechanised and Automated tools to provide a low-noise, faster,...",
    img: "https://d3f1ozwy5sre8y.cloudfront.net/s3fs-public/2023-10/Mechanised%20Tools.png?format=webp&width=384&quality=75",
    link: "Read More",
  },
  {
    title: "Furniture & Floor Covering",
    desc: "We ensure that all your furniture, flooring, surface, and valuable...",
    img: "http://d3f1ozwy5sre8y.cloudfront.net/s3fs-public/2023-10/Free%20On-Site%20Consultation_1.png?format=webp&width=384&quality=75",
    link: "Read More",
  },
];

const WhyChoose: React.FC = () => {
  return (
    <section className="w-full py-16 max-w-[80%] m-auto">
      <div className="mx-auto flex flex-col items-center px-4">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-4 tracking-tight">
          Why Choose Creation Paints Express Painting?
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-2xl">
          We at Creation Paints Express Painting are trusted by thousands of families to complete their home painting projects and renovation services with our experts.
        </p>
        <div className="w-full grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {cardData.map((card, idx) => (
            <div key={card.title} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col overflow-hidden relative">
              <img src={card.img} alt={card.title} className="w-full h-48 object-cover rounded-t-xl" draggable={false}/>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-medium text-lg mb-2 text-gray-900">{card.title}</h3>
                <p className="text-sm text-gray-600 flex-1">{card.desc}
                  <a href="#" className="text-[#1a73e8] ml-1 hover:underline">{card.link}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;