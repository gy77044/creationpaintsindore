import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import PaintDetailSection from '../components/PaintDetailSection'
import blackbalti from "../../public/assests/blackbalti.png"
import ColourInspirationSection from '../components/ColourInspirationSection'
import InteractiveCard from '../components/InteractiveCard'
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
              <InteractiveCard/>
              <br/>
              <br/>
              <PaintProductCards/>
              <PaintDetailSection id={0}  paintImg={blackbalti} PaintTitle="Metallic Paints by Creation Paints" PaintDetail="Creation Paints' Metallic Paints bring elegance and shine to your walls with a smooth, reflective finish. Ideal for feature walls, they offer durability, luxury, and a rich decorative appeal. Add a touch of luxury and brilliance to your walls with our premium metallic finishes."/>
              <Footer/>
    </>
  )
}

export default Outdoor