import React, { useState } from 'react';
import pic1 from '../../assets/poert1.png'
import pic2 from '../../assets/port2.png'
import pic3 from '../../assets/port3.png'

export default function Portfolio() {
  const images = [pic1, pic2, pic3,pic1,pic2,pic3]; 
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="d-flex justify-content-center align-content-center py-4 ">
        <div>
          <h1 className='text-uppercase fw-bold'>portfolio component</h1>
          <div className="d-flex align-items-center justify-content-center">
            <div className="line bg-black"></div>
            <i className="fa-solid fa-star me-3 ms-3"></i>
            <div className="line bg-black"></div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row g-4">
        {images.map((image, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div
              className="position-relative image-container"
              data-bs-toggle="modal"
              data-bs-target="#imageModal"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image} alt={`pic-${index}`} className="rounded-3 w-100" />
              <div className="hider d-flex justify-content-center align-items-center position-absolute start-0 top-0 w-100 h-100">
                <i className="fa-solid fa-plus fa-2x text-white"></i>
              </div>
            </div>
          </div>
        ))}
{/**modalll */}
        <div className="modal fade" id="imageModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-transparent border-0">
              <div className="modal-body p-0">
                {selectedImage && <img src={selectedImage} alt="selected" className="w-100 " />}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
