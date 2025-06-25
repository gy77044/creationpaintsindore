import React from "react";
import bucketImage from "../../../public/assests/allimg/blueIndoor.jpeg"; // Update with correct path

const ProductHighlight: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
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
                    Metallic Emulsion—
                  </dt>
                  <dd className="inline">
                    Premium interior emulsion with a shimmering metallic finish
                    that adds depth, elegance, and durability to interior walls.
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
                    Luxury Silk Emulsion—
                  </dt>
                  <dd className="inline">
                    A high-end exterior paint offering a rich, smooth silk-like
                    finish with long-lasting weather protection and luxurious
                    appeal.
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
                    Interior-Exterior Emulsion—
                  </dt>
                  <dd className="inline">
                    Versatile emulsion suitable for both interiors and
                    exteriors, offering excellent coverage, smooth finish, and
                    resistance to moisture and weather.
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
                    Interior-Exterior Primer—
                  </dt>
                  <dd className="inline">
                    A high-performance primer that enhances paint adhesion,
                    seals porous surfaces, and ensures long-lasting results on
                    interior and exterior walls.
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
                    Wall-Furniture Putty—
                  </dt>
                  <dd className="inline">
                    Multipurpose putty designed for both walls and furniture —
                    providing a smooth, crack-free base by filling minor
                    imperfections and pores.
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
                    Hi-Power Pigment Paster—
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
                    Acrylic/Synthetic Distemper:—
                  </dt>
                  <dd className="inline">
                    Economical and easy-to-apply wall finish, ideal for interior
                    walls — providing a smooth matte finish with good
                    washability and coverage.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <img
            src={bucketImage}
            alt="Product screenshot"
            className="w-3xl w-fit max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 hover:scale-105 transition-all duration-500"
            width="2432"
            height="1442"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductHighlight;
