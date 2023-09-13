import React from 'react'

export default function Contact() {
  return <>
  
  <div className="contact py-5">
    <div className="container">
      <div className='d-flex justify-content-center align-items-center'>
      <div className='conCap '>
        <h2 className='text-center fw-bolder'>CONATCT SECTION</h2>
          <div className='contII text-center'>
              <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
 
     <form action="" className='mt-5 w-50 m-auto'>
        <input type="text" placeholder='userName' className='form-control border-0 border-bottom mt-5'/>
        <input type="number" placeholder='userAge' className='form-control border-0 border-bottom mt-5'/>
        <input type="email" placeholder='userEmail' className='form-control border-0 border-bottom mt-5'/>
        <input type="password" placeholder='userPassword' className='form-control border-0 border-bottom mt-5'/>   
        <buttom className="mt-5 btn btn-success">send Message</buttom>
      </form>
    </div>
  </div>
  
  </>
}
