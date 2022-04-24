import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HamburguerIcon } from "../../Icons/hamburguerMenu/hamburguerMenu";
import HeaderAuth from "../../Auth/HeaderAuth/HeaderAuth";
import Sidebar from "../Sidebar/Sidebar";
import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { Logo } from "../../Icons/logo/logo";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [showAuthbar, setShowAuthbar] = useState<boolean>(false);
  const [showMoon, setShowMoon] = useState<boolean>(true);
  const [showSun, setShowSun] = useState<boolean>(false);

  const { toggleColorMode } = useColorMode();


  const onNightToggle = () => {
    toggleColorMode();
    setShowMoon(!showMoon);
    setShowSun(!showSun);
  };

  return (
    <div className="navbar">
      {showSun && (
        <div className="logo">
          <Link to="/">
            <Logo className="logo-pic" />
          </Link>
        </div>
      )}
      {/* <div className="logo-title"> LearnJP</div> */}
      {showMoon && (
        <div className="logo-day">
          <Link to="/">
            <Logo className="logo-pic" />
          </Link>
        </div>
      )}
      <div className="headerContainer">
        <div className="hamburguerIcon">
          <HamburguerIcon
            stroke="crimson"
            className="hamburguerIcon"
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </div>
        {showSidebar && (
          <Sidebar
            onClose={() => setShowSidebar(false)}
            isOpen={() => setShowSidebar(true)}
            variant={"drawer"}
            onNightToggle={onNightToggle}
            showMoon={showMoon}
            showSun={showSun}
          />
        )}
        <div className="desktopHeader">
          {/* turn this into a component that takes 2 components - the regular navbar list and the auth component */}
          <Link to="/about" className="aboutLink">
            About
          </Link>
          <Link to="/learn" className="aboutLink">
            Learn Kanji
          </Link>
          {showMoon && (
            <MoonIcon
              className="toggleIcon"
              onClick={() => {
                onNightToggle();
              }}
            />
          )}
          {showSun && (
            <SunIcon
              className="toggleIcon"
              onClick={() => {
                onNightToggle();
              }}
            />
          )}

          {showAuthbar && <HeaderAuth />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
