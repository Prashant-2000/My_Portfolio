import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/MY_RESUME.pdf'
// import pdf from './Data/pdf.json'
import Typed from "typed.js"


import hero from './Data/hero.json'

const Home = () => {
const typedRef = useRef(null)
useEffect(() => {

  const options = {
    strings:["Prashant Gogde", "Full Stack Developer"],
    typeSpeed:50,
    backSpeed:50,
    loop:true
  }

  const typed = new Typed(typedRef.current, options)

  return () => {
    typed.destroy()
  }
})

  return (
    <div className='container home' id='home'>
      <div className="left"
      data-aos="fade-up-right"
      data-aos-duration="1000">
        <h1 ref={typedRef}>Lorem ipsum dolor sit</h1>

        <a href={pdf} download="Prashant_Gogde_Resume.pdf" className='btn btn-outline-success my-3'>Download Resume</a>
      </div>

      <div className="right">
        <div className="img"

        // Used AOS -> Animation On Scroll Library
        data-aos="fade-up-left"
        data-aos-duration="1000">
          <img src={`/assets/${hero.imgSrc}`} alt="Hero" />
        </div>
      </div>
    </div>
  )
}

export default Home