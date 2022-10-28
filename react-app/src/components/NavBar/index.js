import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import ProfileDropDownMenu from "./ProfileButton";
import home from "../../images/home.png";
import add from "../../images/add.png";
import explore from "../../images/compass.png";
import logo from "../../images/Instagram_logo.png";
import {
  AiOutlineCompass,
  AiOutlinePlusSquare,
  AiFillHome,
} from "react-icons/ai";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-child logo-portion">
        <NavLink to={`/`}>
          <div className="navbar-logo-container">
            <img className="logo-wrapper" src={logo} alt="logo" />
          </div>
        </NavLink>
      </div>
      <div className="navbar-child search-portion">Search</div>
      <div className="navbar-child right-part-portion">
        <div className="nav-bar-right-side-container">
          <NavLink to={`/`} className="icon-wrapper">
            <AiFillHome className="icon-buttons" />
          </NavLink>
          <AiOutlinePlusSquare className="icon-buttons side-step" />
          <NavLink to={`/explore`} className="icon-wrapper">
            <AiOutlineCompass className="icon-buttons side-step" />
          </NavLink>
          <ProfileDropDownMenu />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
