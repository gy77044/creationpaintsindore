import Footer from './Footer'
import GetInTouchForm from "./GetInTouchForm"
import Header from './Header/Header'
import PaintShades from './PaintShades'
import Hero from './StickSlider'
import blkbug from "../assests/blkbug.png";
import grblati from "../assests/colorful-paint-cans.jpg";
import mbalti from "../assests/multiplebalti.png";
 const imageData1 = [
  { title: "Available", src: mbalti },
  { title: "InStock", src: blkbug },
  { title: "Delivered", src: grblati },
];
const Shades = () => {
  return (
    <>
      {/* Color Palette */}
      <section  className=" mt-20 scroll-smooth px-6 md:px-20 py-16 text-[#161e32] bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#161e32] hover-shadow">Choose Your Color</h2>
        <p className="text-center my-8 text-base sm:text-lg text-gray-600 animate-new-color-change mb-1">
          Find your perfect shade with CreationPaints — explore curated color palettes designed to match every mood,
          style, and space with elegance and harmony.
        </p>
        <PaintShades />
        <Hero imageData={imageData1} />
      </section>
        <h2 className="text-3xl font-bold text-center mb-10 text-[#161e32] hover-shadow animate-new-color-change">Inquiry</h2>
       <GetInTouchForm /> 
     
    </>
  )
}

export default Shades