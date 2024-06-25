import React from 'react'
import skills from './Data/skills.json'

const Skills = () => {

    console.log(skills)
  return (
    <>
    <div className="container skills" id="skills">
        <h1>SKILLS</h1>
        <div className="items">
          {skills.map((data)=>(
            <>
              <div className="item" key={data.id}
              
              // Used AOS -> Animation On Scroll Library
              data-aos="flip-left"
              data-aos-duration="1000">
                  <img src={`/assets/${data.imageSrc}`} alt="" />
                  <h3>{data.title}</h3>
              </div>
            </>
        ))}
      </div>
    </div>
    </>
  )
}

export default Skills