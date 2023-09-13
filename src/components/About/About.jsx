import React from 'react'

export default function About() {
  return <>
    <div className='aboutColor '>
       <div className="container">
        <div className='aboutCap d-flex justify-content-center align-items-center'>
          <div className=''>
              <h2 className='text-white fw-bolder'> ABOUT COMPONENT</h2>
              <div className='contI text-center'>
                  <i className="fa-solid fa-star text-white"></i>
              </div>
            </div>
          </div>
          <div className="prg mt-3">
            <div className="row text-center">
              <div className="col-md-5 offset-1">
                <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
              <div className="col-md-5">
                <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
          </div>
       </div>
    </div>
   
            
  </>
}