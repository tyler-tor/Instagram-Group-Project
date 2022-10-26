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
  AiOutlineUser,
} from "react-icons/ai";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <NavLink to={`/`}>
        <div className="navbar-logo-container">
          <img className="logo-wrapper" src={logo} alt="logo" />
        </div>
      </NavLink>
      <div>Search</div>
      <div>
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
