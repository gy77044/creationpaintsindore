import React, { useState } from "react";
import acrylic from "../../public/assests/blackbalti.png"
import "./mainscreen.scss"
const products = [
  {
    name: "Vogue Effectiq",
    tagline: "Designed to delight your space",
    image: acrylic,
    features: [
      { icon: "/themes/custom/jsw_theme/images/prod/feat_easywash_white.svg", label: "Easy Wash" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_germblock_white.svg", label: "Germ Block" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_hdpattern_white.svg", label: "HD Patterns" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_optimum_white.svg", label: "Optimum Design Time" },
    ],
    link: "#",
  },
  {
    name: "Vogue Stain Block",
    tagline: "Superior stain resistance",
    image: acrylic,
    features: [
      { icon: "/themes/custom/jsw_theme/images/prod/feat_easywash_white.svg", label: "Easy Wash" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_germblock_white.svg", label: "Germ Block" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_hdpattern_white.svg", label: "HD Patterns" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_optimum_white.svg", label: "Optimum Design Time" },
    ],
    link: "#",
  },
  {
    name: "Halo LuxGlo",
    tagline: "Rich high-gloss finish",
    image: acrylic,
    features: [
      { icon: "/themes/custom/jsw_theme/images/prod/feat_easywash_white.svg", label: "Easy Wash" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_germblock_white.svg", label: "Germ Block" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_hdpattern_white.svg", label: "HD Patterns" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_optimum_white.svg", label: "Optimum Design Time" },
    ],
    link: "#",
  },
  {
    name: "Aurus Regal",
    tagline: "Luxury for your walls",
    image: acrylic,
    features: [
      { icon: "/themes/custom/jsw_theme/images/prod/feat_easywash_white.svg", label: "Easy Wash" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_germblock_white.svg", label: "Germ Block" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_hdpattern_white.svg", label: "HD Patterns" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_optimum_white.svg", label: "Optimum Design Time" },
    ],
    link: "#",
  },
  {
    name: "Halo Satin",
    tagline: "Elegant satin finish",
    image: acrylic,
    features: [
      { icon: "/themes/custom/jsw_theme/images/prod/feat_easywash_white.svg", label: "Easy Wash" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_germblock_white.svg", label: "Germ Block" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_hdpattern_white.svg", label: "HD Patterns" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_optimum_white.svg", label: "Optimum Design Time" },
    ],
    link: "#",
  },
  {
    name: "Joie Classic",
    tagline: "Timeless matte look",
    image: acrylic,
    features: [
      { icon: "/themes/custom/jsw_theme/images/prod/feat_easywash_white.svg", label: "Easy Wash" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_germblock_white.svg", label: "Germ Block" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_hdpattern_white.svg", label: "HD Patterns" },
      { icon: "/themes/custom/jsw_theme/images/prod/feat_optimum_white.svg", label: "Optimum Design Time" },
    ],
    link: "#",
  },
];

const featureSvgs = {
  "/themes/custom/jsw_theme/images/prod/feat_easywash_white.svg": "https://www.jswpaints.in/themes/custom/jsw_theme/images/prod/feat_easywash_white.svg",
  "/themes/custom/jsw_theme/images/prod/feat_germblock_white.svg": "https://www.jswpaints.in/themes/custom/jsw_theme/images/prod/feat_easywash_white.svg",
  "/themes/custom/jsw_theme/images/prod/feat_hdpattern_white.svg": "https://www.jswpaints.in/themes/custom/jsw_theme/images/prod/feat_easywash_white.svg",
  "/themes/custom/jsw_theme/images/prod/feat_optimum_white.svg": "https://www.jswpaints.in/themes/custom/jsw_theme/images/prod/feat_easywash_white.svg",
};

export default function ProductHighlightsSection() {
  const [centerIdx, setCenterIdx] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const maxIdx = products.length - 1;

  const scrollLeft = () => setCenterIdx((idx) => (idx > 0 ? idx - 1 : idx));
  const scrollRight = () => setCenterIdx((idx) => (idx < maxIdx ? idx + 1 : idx));

  const getVisibleProducts = () => {
    let start = Math.max(centerIdx - 2, 0);
    let end = Math.min(centerIdx + 2, maxIdx);
    if (centerIdx < 2) end = Math.min(4, maxIdx);
    if (centerIdx > maxIdx - 2) start = Math.max(maxIdx - 4, 0);
    const visible = products.slice(start, end + 1);
    return visible.map((prod, i) => ({ ...prod, pos: i + start - centerIdx }));
  };
  const visible = getVisibleProducts();

  return (
    <section className="relative bg-white products-section pt-6">
      {/* Section header */}
      <div className="max-w-6xl mx-auto prod_wrapper mb-6 lg:mb-12 text-left pt-10">
        <div className="section_subtitle text-primary text-4xl font-semibold mb-1">Products</div>
        <div className="section_title text-gray-700 text-sm md:text-xl font-bold leading-tight">
          Our water-based paints suited for your family and the environment!
        </div>
      </div>

      {/* Carousel on SVG background, and central product card overlay */}
      <div className="relative mt-12 w-full h-[60vh] overflow-hidden">
        <svg width="6852" height="1800" viewBox="0 0 7852 2265" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "translate(-3926px, 0%)", opacity: 1 }}>
          <path d="M8778.5 307.87C8778.5 1050.69 9117.5 3089.87 3926 3089.87C-2318.5 2696 -971.5 1050.69 -971.5 307.87C-971.5 -434.953 1832.84 399.87 3926 399.87C6019.16 399.87 8778.5 -434.953 8778.5 307.87Z" fill="url(#paint0_linear_2179_201)"></path>
          <defs>
            <linearGradient id="paint0_linear_2179_201" x1="3926" y1="399.871" x2="3926" y2="1217.72" gradientUnits="userSpaceOnUse">
              <stop className="stop1" stop-color="#391546"></stop>
              <stop className="stop2" offset="1" stop-color="#632C85"></stop> </linearGradient>
          </defs>
        </svg>
        {/* Carousel */}
        <div className="maincss absolute top-0 z-10 w-full flex flex-col items-center justify-center h-[190px]">
          <div className="relative flex items-end justify-center gap-3 sm:gap-6 w-full max-w-5xl select-none h-[230px]">
           
            {/* Images (perspective/scale) */}
            <div className="flex items-end justify-center mx-auto w-full">
              {visible.map((prod) => {
                // scaling and opacity per position
                let scale = 1, z = 10 - Math.abs(prod.pos); let style = {};
                if (prod.pos === 0) {
                  scale = 1.2;
                  // style = { filter: "drop-shadow(0 8px 36px #0009)" };
                } else if (Math.abs(prod.pos) === 1) {
                  scale = 1.0;
                  // style = { filter: "drop-shadow(0 4px 20px #0006)" };
                } else {
                  scale = 0.8;
                  style = { opacity: 0.4 };
                }
                return (
                  <div
                    key={prod.name}
                    style={{ transform: `scale(${scale})`, zIndex: z, ...style, transition: "all 0.3s" }}
                    className="mx-2 lg:mx-4 cursor-pointer duration-300"
                    onClick={() => setCenterIdx(centerIdx + prod.pos)}
                    aria-current={prod.pos === 0 ? "true" : undefined}
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      // className="object-contain h-24 sm:h-32 md:h-44 lg:h-52 drop-shadow-xl select-none rounded-2xl border border-[#ede9f7] bg-white p-2"
                      draggable={false}
                    />
                  </div>
                );
              })}
            </div>
           
          </div>
        </div>
        {/* Central Product Highlight Card */}
        <div className="prod_content absolute left-1/2 -bottom-12 -translate-x-1/2 -translate-y-1/4 w-full max-w-lg px-4 py-4 flex flex-col items-center text-center bgshape z-20 pointer-events-none">
          <div className="prod_title text-2xl md:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-lg mb-1">
            {products[centerIdx].name}
          </div>
          <div className="prod_desc text-lg md:text-xl text-gray-100 mb-4 mt-1 drop-shadow">
            {products[centerIdx].tagline}
          </div>
          <div className="prod_features flex flex-wrap justify-center gap-6 mb-6">
            {products[centerIdx].features.map((f) => (
              <div key={f.label} className="prod_feature flex flex-col items-center">
                <img
                  src={featureSvgs[f.icon as keyof object] || featureSvgs[Object.keys(featureSvgs)[0] as keyof object]}
                  alt={f.label}
                  className="h-12 w-12 object-contain mb-1"
                />
                <span className="text-white text-xs font-semibold drop-shadow opacity-90 mt-1">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
          <a
            href={products[centerIdx].link}
            className="btn_style_1 gtm_home_astoniq px-6 py-2 bg-white/90 text-[#632C85] rounded-lg font-bold shadow-lg hover:bg-[#632C85] hover:text-white border-2 border-transparent hover:border-white transition pointer-events-auto"
          >
            Discover
          </a>
        </div>
      </div>
    </section>
  );
}
