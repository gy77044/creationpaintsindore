import assosrt from "../assests/allimg/assortment.jpg"
const AboutCompany = () => {
  return (
    <>
      <section id="contactUS" className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <p className="max-w-3xl mx-auto text-center text-lg animate-new-color-change">
          Creation Paints is committed to delivering vibrant, eco-friendly, and long-lasting paint solutions. Our 6 premium categories cover everything you need to create beautiful spaces inside and out.
        </p>
      </section>
    <div id="about" className="scroll-smooth relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
  <img src={assosrt} alt="" className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center" />
  <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
    <div className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
  </div>
  <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
    <div className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
  </div>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">About us</h2>
      <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">At CreationPaints, we believe every wall deserves a story.
With a passion for color and a commitment to quality, CreationPaints offers a wide range of interior and exterior paints, primers, and specialty coatings. Proudly made in India, our products are crafted to withstand harsh weather, enhance beauty, and bring your vision to life.

Whether you're designing a cozy home, a modern office, or a bold commercial space — our paints are trusted for their durability, vibrant finish, and eco-friendly formulas.

CreationPaints — Color Beyond Imagination.</p>
    </div>
    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      {/* <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
        <a href="#">Open roles <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Programs <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Our values <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Meet our leadership <span aria-hidden="true">&rarr;</span></a>
      </div> */}
      <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-gray-300">Years of Expertise</dt>
          <dd className="text-4xl font-semibold tracking-tight text-white">1+</dd>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-gray-300">Team Members</dt>
          <dd className="text-4xl font-semibold tracking-tight text-white">20+</dd>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-gray-300">Cities Served</dt>
          <dd className="text-4xl font-semibold tracking-tight text-white">200+</dd>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base/7 text-gray-300">Products Delivered</dt>
          <dd className="text-4xl font-semibold tracking-tight text-white">Loading..</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
    </>
  )
}

export default AboutCompany