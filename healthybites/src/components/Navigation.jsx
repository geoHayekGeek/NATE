import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navigation.css';
import { useState } from 'react';

export const Navigation = () => {
  const navTitle={
    color: 'white',
    fontSize:'30px',
    fontFamily: 'Comic Sans MS, Comic Sans, cursive'
  };

  const [buttonText, setButtonText] = useState("Menu");

  const [opened, setOpened] = useState(false);

  const toggleHandler = () =>{
    if(buttonText==="Menu"){
      setButtonText("Close");
    }
    else{
      setButtonText("Menu");
    }
  }

  const toggleHandler2 = () => {
    const nav= document.getElementById("navbarNav")
    if(opened){
      nav.classList.add("black");
      setOpened(false);
    }
    else{
      nav.classList.remove("black");
      setOpened(true);
    }
  }

  const toggleHandlerWrap = () =>{
    toggleHandler();
    toggleHandler2();
  }

  return (
    <nav className="navbar navbar-expand-lg pe-md-5 py-3 px-2 mx-0 mx-md-2" id='nav'>
      <div className="container-fluid mx-0 px-0">
        <Link className="navbar-brand fw-bolder" to="/" style={navTitle}><img style={{width: "130px", height: "40px"}} className="m-0 p-0" src={require("../media/logo/logo.png")} alt="" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleHandlerWrap}>
          <span className="text-white fw-bolder" id='toggler'>{buttonText}</span>
        </button>
        <div className="collapse navbar-collapse justify-content-md-center m-0 p-0" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link fw-bolder hover-purple me-md-2" aria-current="page" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bolder hover-purple me-md-2" to="/about">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bolder hover-purple me-md-2" to="/nate">NATE</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bolder hover-purple me-md-2" to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
