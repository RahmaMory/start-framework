import React from 'react'
import Pic from '../../assets/avataaars.svg'
export default function Home() {
  return (
    <>
    <div className=" text-center header d-flex align-items-center justify-content-center " >
        <div >
           <img src={Pic} className=' mb-3' />
           <h2 className='text-white text-uppercase mt-4 mb-3 fw-bold fs-1'>start Framework</h2>
           <div className="d-flex align-items-center justify-content-center">
            <div className="line ">   </div>
<i className="fa-solid fa-star text-white me-3 ms-3"></i>
          <div className="line ">   </div>
           </div>
           <p className='mt-3 text-white'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
        
    </div>

    </>
  )
}
