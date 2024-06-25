import React from 'react'
import internships from './Data//internships.json'

const Internships = () => {
  return (
    <>
    <div className="container intern">
      <h1>INTERNSHIPS</h1>
      {
        internships.map((data)=>{
          return(
            <>
            <div key={data.id} className='ex-items text-center my-5' id='internships'
            
            // Used AOS -> Animation On Scroll Library
            data-aos="zoom-in"
            data-aos-duration="1000">

              <div className="left">
                <img src={`/assets/${data.imageSrc}`} alt="" />
              </div>

              <div className="right">
                <h2>{data.role}</h2>
                <h4>

                  <span style={{color: "green"}}>
                  {data.startDate} {data.endDate} {" "}
                  </span>{" "}

                  <span style={{color: "yellow"}}> {data.location} </span>
                </h4>
                
                <h5 style={{color: "darkgray"}}>{data.experiences[0]}</h5>
                <h5 style={{color: "darkgray"}}>{data.experiences[1]}</h5>
              </div>

            </div>
            </>
          )
        })
      }
    </div>
    
    </>
  )
}

export default Internships