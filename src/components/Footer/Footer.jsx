import React from 'react'

export default function Footer() {
  return <>
  
  <div className="footer text-center text-white  ">
   <div className="footerInfo footerInfo p-5">
   <div className="container">
        <div className="row">
            <div className="col-md-4">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
                <h3>AROUND THE WEB</h3>
              <ul className='d-flex'>
                <li className='text-white'><i class="fa-brands fa-facebook"></i></li>
                <li><i className="fa-brands fa-twitter"></i></li>
                <li><i className="fa-brands fa-linkedin-in"></i></li>
                <li><i className="fa-solid fa-globe"></i></li>
              </ul>
            </div>
            <div className="col-md-4">
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
        
    </div>
   </div>
    <div className="copyright bg-dark p-3">
            <div className="container">
              <p>Copyright © Your Website 2021</p>
            </div>
        </div>
  </div>
  
  </>
}
