import React from 'react'
import imgSrc from '../../assesta/images/poert1.png'
import imgSrc2 from '../../assesta/images/port2.png'
import imgSrc3 from '../../assesta/images/port3.png'


export default function Portfolio() {
  return <>
   <div className="contact my-5">
    <div className="container">
      <div className='d-flex justify-content-center align-items-center'>
      <div className='proCap '>
        <h2 className='text-center fw-bolder'>PORTFOLIO COMPONENT</h2>
          <div className='contIII text-center'>
              <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
      <div className="row g-5 mt-4 ">
        <div className="col-md-4 rounded-3 layoutDiv">
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content ">   
                    <img src={imgSrc} class="img-fluid" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"/>   
                    </div>
                </div>
            </div>
            <img src={imgSrc} class="img-fluid" />   
            <div className="layout end-0 top-0 start-0 bottom-0 d-flex justify-content-center align-items-center" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                <i class="fa-solid fa-plus text-white fa-6x"></i>
            </div>
        </div>
        <div className="col-md-4 rounded-3 layoutDiv">
            <div class="modal fade" id="exampleModalToggle1" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <img src={imgSrc2} class="img-fluid" data-bs-target="#exampleModalToggle1" data-bs-toggle="modal"/>   
                    </div>
                </div>
            </div>
            <img src={imgSrc2} class="img-fluid"/>  
            <div className="layout end-0 top-0 start-0 bottom-0 d-flex justify-content-center align-items-center" data-bs-target="#exampleModalToggle1" data-bs-toggle="modal">
                <i class="fa-solid fa-plus text-white fa-6x"></i>
            </div> 
        </div>
        <div className="col-md-4 rounded-3 layoutDiv">
            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">          
                    <img src={imgSrc3} class="img-fluid" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"/>   
                    </div>
                </div>
            </div>
            <img src={imgSrc3} class="img-fluid" />  
            <div className="layout end-0 top-0 start-0 bottom-0 d-flex justify-content-center align-items-center" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
                <i class="fa-solid fa-plus text-white fa-6x"></i>
            </div> 
        </div>
        <div className="col-md-4 rounded-3 layoutDiv">
            <div class="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content"> 
                    <img src={imgSrc} class="img-fluid" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal"/>   
                    </div>
                </div>
            </div>
            <img src={imgSrc} class="img-fluid" />   
            <div className="layout end-0 top-0 start-0 bottom-0 d-flex justify-content-center align-items-center" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal">
                <i class="fa-solid fa-plus text-white fa-6x"></i>
            </div>
        </div>
        <div className="col-md-4 rounded-3 layoutDiv">
            <div class="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <img src={imgSrc2} class="img-fluid" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal"/>   
                    </div>
                </div>
            </div>
            <img src={imgSrc2} class="img-fluid"/>   
            <div className="layout end-0 top-0 start-0 bottom-0 d-flex justify-content-center align-items-center" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal">
                <i class="fa-solid fa-plus text-white fa-6x"></i>
            </div>
        </div>
        <div className="col-md-4 rounded-3 layoutDiv ">
            <div class="modal fade" id="exampleModalToggle6" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content"> 
                    <img src={imgSrc3} class="img-fluid" data-bs-target="#exampleModalToggle6" data-bs-toggle="modal"/>   
                    </div>
                </div>
            </div>
            <img src={imgSrc3} class="img-fluid" /> 
            <div className="layout end-0 top-0 start-0 bottom-0 d-flex justify-content-center align-items-center" data-bs-target="#exampleModalToggle6" data-bs-toggle="modal">
                <i class="fa-solid fa-plus text-white fa-6x"></i>
            </div>  
        </div>
        </div>  
    </div>
    <div>

    </div>
  </div>
  
  
  </>
}
