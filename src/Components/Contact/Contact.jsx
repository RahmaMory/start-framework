import React from 'react'

export default function Contact() {
  return (
    <>
     <div className="min-vh-100">
          <div className="d-flex justify-content-center align-content-center py-4 ">
        <div>
          <h1 className='text-uppercase fw-bold'>conatct section</h1>
          <div className="d-flex align-items-center justify-content-center">
            <div className="line bg-black"></div>
            <i className="fa-solid fa-star me-3 ms-3"></i>
            <div className="line bg-black"></div>
          </div>
        </div>
      </div>
    
<div className='container mt-5'>
  <div className="w-75  m-auto">
    <div className="form-floating mb-4">
    <input type="text" className="form-control border-0 border-bottom  " id="floatingInput" placeholder="user name" />
    <label htmlFor="floatingInput">UserName:</label>
  </div>
  <div className="form-floating mb-4">
    <input type="text" className="form-control border-0 border-bottom " id="floatingInput" placeholder="userAge" />
    <label htmlFor="floatingInput">UserAge:</label>
  </div>
   <div className="form-floating mb-4">
    <input type="email" className="form-control border-0 border-bottom " id="floatingInput" placeholder="userEmail" />
    <label htmlFor="floatingInput">UserEmail:</label>
  </div>
   <div className="form-floating mb-4">
    <input type="password" className="form-control border-0 border-bottom " id="floatingInput" placeholder="userPassword" />
    <label htmlFor="floatingInput">UserPassword:</label>
  </div>
    <button className='btn btn-success border-0 mb-4'>Send Message</button>

  </div>
</div>
     </div>


    </>
  )
}
