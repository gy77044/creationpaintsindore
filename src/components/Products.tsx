import type React from "react";
import { useState } from "react";

const categories = [
  "Interior",
  "Exterior",
  "Wood Finish",
  "Metal Finish",
  "Waterproofing",
  "Undercoat",
];

const featuredProductImg =
  "https://d3f1ozwy5sre8y.cloudfront.net/s3fs-public/2023-09/colorinspiration1-min%20%281%29%20%281%29.jpg?format=webp&width=800&quality=75";

const Products: React.FC = () => {
  const [active, setActive] = useState(0);
  return (
    <section id="products" className="bg-white rounded-lg shadow p-8 mt-10 max-w-[80%] m-auto">
      <h2 className="font-bold text-2xl mb-8">Products We Offer</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
        <aside className="flex flex-row md:flex-col gap-4 md:w-48 w-full md:mb-0 mb-6 flex-wrap">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full border transition text-sm font-medium whitespace-nowrap ${i === active ? "bg-[#39b19f] text-white border-[#39b19f]" : "bg-gray-50 text-[#28403c] border-gray-300"}`}
              onClick={() => setActive(i)}
            >
              {cat}
            </button>
          ))}
        </aside>
        <div className="flex-1 rounded-xl overflow-hidden">
          <img
            src={featuredProductImg}
            className="object-cover w-full max-h-72 rounded-xl shadow"
            alt="Featured product"
          />
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-1">{categories[active]}</h3>
            <p className="text-[#28403c]/80 text-sm">Explore our best in class {categories[active].toLowerCase()} solutions for your home and project needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
