import React from 'react'
import Footer from './Footer'
import GetInTouchForm from "./GetInTouchForm"
import Header from './Header/Header'
const Contact = () => {
  return (
    <>
     <section  className=" mt-20 scroll-smooth px-6 md:px-20 py-16 text-[#161e32] bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#161e32] hover-shadow">Contact Us</h2>
       
        <p className="text-center my-8 text-base sm:text-lg text-gray-600 animate-new-color-change">
          Find your perfect shade with CreationPaints — explore curated color palettes designed to match every mood,
          style, and space with elegance and harmony.
        </p>
       
       <GetInTouchForm /> 
      </section>
   
    </>
  )
}

export default Contact