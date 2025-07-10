import Footer from './Footer'
import Header from './Header/Header'
import Hero from './StickSlider'
import NaturalGreen from "../assests/allimg/NaturalGreen.jpeg";
import skyblueIndoor from "../assests/allimg/skyblueIndoor.jpeg";
import yelloIndor from "../assests/allimg/yelloIndor.jpeg";
import blkbug from "../assests/blkbug.png";
import grblati from "../assests/colorful-paint-cans.jpg";
import mbalti from "../assests/multiplebalti.png";

 const imageData = [
  { title: "Luxury", src: NaturalGreen },
  { title: "Royal", src: skyblueIndoor },
  { title: "Wealthy", src: yelloIndor },
];

 const imageData1 = [
  { title: "Available", src: mbalti },
  { title: "InStock", src: blkbug },
  { title: "Delivered", src: grblati },
];

const Gallery = () => {
  return (
    <>

     <h2 id="gallery" className=" my-10 scroll-smooth text-3xl font-bold text-center mb-10 text-[#161e32] hover-shadow">
        Gallery
      </h2>
      <p className="mx-1 text-center mt-2 text-base sm:text-lg text-gray-600 animate-new-color-change">
        Discover how CreationPaints brings walls to life — browse real spaces, creative finishes, and inspiring color combinations captured through our customer gallery.
      </p>
      <Hero imageData={imageData} />

      {/* Color Palette */}
      <section id="shade" className="scroll-smooth px-6 md:px-20 py-16 text-[#161e32] bg-white">
        <Hero imageData={imageData1} />
      </section>
      
    </>
  )
}

export default Gallery