import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ProfileDropDownMenu from "./ProfileDropDownMenu";
import logo from "../../images/Instagram_logo.png";
import SearchBar from "./SearchBar";
import PostFormModal from "./PostFormModal";
import { AiOutlineCompass, AiFillHome } from "react-icons/ai";
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
      <div className="navbar-child search-portion">
        <SearchBar />
      </div>
      <div className="navbar-child right-part-portion">
        <div className="nav-bar-right-side-container">
          <NavLink to={`/`} className="icon-wrapper">
            <AiFillHome className="icon-buttons" />
          </NavLink>
          <PostFormModal />
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
