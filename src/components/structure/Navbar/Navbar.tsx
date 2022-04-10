import "./style.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HamburguerIcon } from "../../Icons/hamburguerMenu/hamburguerMenu";
import HeaderAuth from "../../Auth/HeaderAuth/HeaderAuth";
import Sidebar from "../Sidebar/Sidebar";


const Navbar = () => {

  const [showSidebar, setShowSidebar] = useState<boolean>(false)
   
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">LearnKanji</Link>
      </div>
      
      <div className="headerContainer">
          <div className="hamburguerIcon"><HamburguerIcon stroke="white" className="hamburguerIcon" onClick={() => setShowSidebar(!showSidebar)}/></div>
          {showSidebar && <Sidebar />}
          <div className="desktopHeader"> {/* turn this into a component that takes 2 components - the regular navbar list and the auth component */}
            <Link to="/about" className="aboutLink">About</Link>

           <HeaderAuth />
          </div>
      </div>
    </div>
  );
};

export default Navbar;
