import React from 'react'

export default function Footer() {
  return (
    <>
    <div className="footer ">
      <div className=" container  py-5 ">
        <div className="row text-center">
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h3>AROUND THE WEB</h3>
            <div className="icons d-flex justify-content-center  gap-2 flex-wrap">
              <i className="fa-brands fa-facebook icon border border-1 rounded-circle p-2"></i>
              <i className="fa-brands fa-twitter icon border border-1 rounded-circle p-2"></i>
              <i className="fa-brands fa-linkedin-in icon border border-1 rounded-circle p-2"></i>
              <i className="fa-solid fa-globe icon border border-1 rounded-circle p-2"></i>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <h3>ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by Route
            </p>
          </div>
        </div>
      </div>
</div>
      <div className="copyRight text-center text-white p-3">
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  )
}
