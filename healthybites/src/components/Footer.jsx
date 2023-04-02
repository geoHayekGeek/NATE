import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-black py-4" style={{overflowX: "hidden"}}>
      <div className="row ms-2">
        <div className="col text-white">
          <h5>NATE &copy; 2023</h5>
          <p className="lead">Terms & policies</p>
        </div>

        <div className="col me-md-0">
        <div className="container-fluid">
    <div className="me-md-5 ms-md-0">
    <div className="row ms-md-0 me-md-5">
      <div className="col-sm-12 text-center offset-4 offsett-md-6 offset-lg-7">
        <nav className="navbar navbar-expand-sm bg-black mb-4">
          <div className="navbarNav" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">HOME</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-white" to="/about">ABOUT</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-white" href="/nate">NATE</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-white" href="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    </div>
  </div>
        </div>
      </div>
    </footer>

)
}
