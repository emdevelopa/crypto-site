import React from "react";
import "./navBar.css";
import logoPng from "../../assets/logo_white.png";
import menuSvg from "../../assets/burger-advanced-svgrepo-com.svg";
import { useState } from "react";

const Navbar = () => {
  
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleNav = () =>{
    if (isNavOpen === false) {
      setIsNavOpen(true);
    }
    else {
      setIsNavOpen(false);
    }
  }
  return (
    <>
      <div className="navBar">
        <div className="navLeft">
          <img className="logo" src={logoPng} alt="" />
          <a href="#" className="PCL">Mentorship</a>
          <a href="#" className="PCL">Insight</a>
          <a href="#" className="PCL">Learning Hub</a>
          <a href="#" className="PCL">Tools</a>
          <a href="#" className="PCL">Pricing</a>
        </div>
        <div className="navRight">
          <a href="sign-in">Log in</a>
          <a href="sign-up" className="bgLink">
            Sign up
          </a>
        </div>

        <div className="mobileNav">
          <button className="menu" onClick={()=> handleNav()}><img src={menuSvg} alt="" /></button>
          <div className={isNavOpen === false ? "mobileLink" : "mobileLink show"}>
          <a href="#" className="ML">Mentorship</a>
          <a href="#" className="ML">Insight</a>
          <a href="#" className="ML">Learning Hub</a>
          <a href="#" className="ML">Tools</a>
          <a href="#" className="ML">Pricing</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
