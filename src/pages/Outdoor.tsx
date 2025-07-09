import bkbalti from "../../public/assests/blkbug.png"
import ColourInspirationSection from '../components/ColourInspirationSection'
import Footer from '../components/Footer'
import Header from '../components/Header/Header'
import PaintDetailSection from '../components/PaintDetailSection'
import PaintProductCards from '../components/Parallex'

const Outdoor = () => {
  return (
    <>
              <Header/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <ColourInspirationSection />
              <br/>
              <br/>
              <PaintDetailSection id={0}  paintImg={bkbalti} PaintTitle="Creation Platinum Luxury Emulsion - HIGH GLOSS" PaintDetail="Creation Paints' - Platinum Luxury Emulsion Paints bring elegance and shine to your walls with a smooth, reflective finish. Ideal for feature walls, they offer durability, luxury, and a rich decorative appeal. Add a touch of luxury and brilliance to your walls with our premium metallic finishes."/>
              <PaintProductCards/>
              <Footer/>
    </>
  )
}

export default Outdoor