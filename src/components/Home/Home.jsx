import React from 'react'
import logo from '../../assesta/images/avataaars.svg'
export default function Home() {
  return <>
  <div className="home text-center">
  <div className="container">
    <div className='d-flex justify-content-center align-items-center'>
        
        <div className=' '>
            <img src={logo} alt="" className='img-fluid mb-3' />
            <h2 className='text-white fw-bolder'>START FRAMEWORK</h2>
            <div className='contHome text-center'>
                <i className="fa-solid fa-star text-white"></i>
            </div>
            <p className='mt-2'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
  </div>
  
  </div>
  </>
}
