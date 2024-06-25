import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Internships from './Components/Internships'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Aos from "aos"
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
    Aos.init()
  })
  return (
    <>
    <Navbar/>
    <div className='container'>
      <Home/>
      <Internships/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>

    </>
  )
}

export default App