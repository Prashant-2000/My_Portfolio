import React from 'react'
import project from './Data/projects.json'

const Projects = () => {
  return (
    <>
      <div className="container projects" id='projects'>
        <h1>PROJECTS</h1>

        <div className="row d-flex justify-content-center align-center-center">
          {project.map((data) => (

            <>
              <div key={data.id} className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4">

{/* Card copid from bootStrap and modified  */}
                <div className="card bg-dark text-light"
                  style={{ width: "18rem", border: "2px solid darkgray", boxShadow:"2px 3px 15px 5px rgb(77, 73, 73)" }}
                  
                  // Used AOS -> Animation On Scroll Library
                  data-aos="flip-right"
                  data-aos-duration="1000"
                  >

                  <div className="img d-flex justify-content-center align-center-center">
                    <img src={data.imageSrc} className="card-img-top" alt="..."
                      style={{
                        width: '250px',
                        height: '200px',
                        border: '1px solid darkgray',
                        borderRadius: '10px',
                        marginTop: '5px'
                      }} />
                  </div>
                  
                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>

                    <p className="card-text">
                      {data.description}
                    </p>

                    <a href={data.demo} className="btn btn-primary mx-3" target="_blank">
                      View
                    </a>
                    <a href={data.demo} className="btn btn-warning">
                      Code
                    </a>

                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

      </div>
    </>
  )
}

export default Projects