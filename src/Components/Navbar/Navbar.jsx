import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg p-4">
  <div className="container">
    <NavLink className="navbar-brand text-uppercase fw-bold fs-2  text-white " to="">Start Framework</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto text-uppercase fs-6 fw-bold">
       
        <NavLink className={({ isActive }) => isActive ? "nav-link btn btn-success border-white text-white ms-3" : "nav-link text-white ms-3"} to="About"> About </NavLink>

        <li className="nav-item ">
          <NavLink className={({ isActive }) => isActive ? "nav-link btn btn-success border-white text-white ms-3" : "nav-link text-white ms-3"} to="Portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) => isActive ? "nav-link btn btn-success border-white text-white ms-3" : "nav-link text-white ms-3"} to="Contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
