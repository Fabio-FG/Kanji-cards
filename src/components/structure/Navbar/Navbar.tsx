import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import { HamburguerIcon } from "../../Icons/hamburguerMenu/hamburguerMenu";


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
          <div className="hamburguerIcon"><HamburguerIcon stroke="white" className="hamburguerIcon"/></div>
          <div className="desktopHeader"> {/* turn this into a component that takes 2 components - the regular navbar list and the auth component */}
            <Link to="/about" className="aboutLink">About</Link>

            {/* Turn this into an auth buttons component */}
            <button className="authBtn" onClick={() => openModal()}>Login</button>
            <button className="authBtn" onClick={() => openModal()}>Sign up</button>

          </div>
      </div>
    </div>
  );
};

export default Navbar;
