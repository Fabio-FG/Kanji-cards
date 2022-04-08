import "./style.css";
import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {


  function openModal(){
      console.log("open");
  }    
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">LearnKanji</Link>
      </div>
      <div className="headerContainer">
          <div className="hamburguerIcon">H</div>
          <div className="desktopHeader"> {/* turn this into a component */}
            <Link to="/about" className="aboutLink">About</Link>
            <button className="authBtn" onClick={() => openModal()}>Sign In</button>
            <button className="authBtn" onClick={() => openModal()}>Log In</button>

          </div>
      </div>
    </div>
  );
};

export default Navbar;
