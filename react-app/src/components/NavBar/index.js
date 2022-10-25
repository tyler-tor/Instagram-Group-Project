import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../LoginPage/LogoutButton";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div>Logo</div>
      <div>Search</div>
      <div>
        <nav>
          <div className="nav-bar-right-side-container">
            <div>Home</div>
            <div>Add Post</div>
            <div>Explore</div>
            <div>Profile Drop Down</div>
            <div>
              <LogoutButton />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
