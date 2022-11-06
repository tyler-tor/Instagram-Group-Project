import React from "react";
import { NavLink } from "react-router-dom";
// import pic from "../../images/screenshot1-2x.png";
import { useSelector } from "react-redux";
import SideNonFollowedUsers from "./SideNonFollowedUsers";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./HomeFeed.css";

const SideStuff = () => {
  const user = useSelector((state) => state.session.user);
  // const history = useHistory()

  // const redirectGithub = () => {
  //   history.push('https://github.com/tyler-tor/Instagram-Group-Project')
  // }

  return (
    <div className="side-stuff-container">
      <NavLink to={`/${user.id}`} className="side-stuff-first-container">
        <img src={user.profilePicture} alt="" />
        <div className="side-stuff-details-container">
          <div className="username-full-name-side-stuff">
            <strong>{user.username}</strong>
            <span className="secondary-gray-text">
              {user.firstName} {user.lastName}
            </span>
          </div>
        </div>
      </NavLink>
      <div className="side-stuff-second-container">
        <div className="suggestions-for-you-styling secondary-gray-text">
          © 2022 Finstagram built by:
          <div className="about-links-styling">
            Derek Torrero
            <div>
              <a href="https://www.linkedin.com/in/derek-torrero-02823018a/">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/tyler-tor">
                <AiFillGithub className="styling-for-about-links-icons" />
              </a>
            </div>
          </div>
          <div className="about-links-styling">
            Theo Fandrich
            <div>
              <a href="https://www.linkedin.com/in/theofandrich/">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/theoman42">
                <AiFillGithub className="styling-for-about-links-icons" />
              </a>
            </div>
          </div>
          <div className="about-links-styling">
            Alan Deleon
            <div>
              <a href="https://www.linkedin.com/in/alan-de-leon-b54621212/">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/AlanDeleon88">
                <AiFillGithub className="styling-for-about-links-icons" />
              </a>
            </div>
          </div>
        </div>
        {/* <div className="github-img-container">
          <img
          alt="Github"
          src="https://pngimg.com/uploads/github/github_PNG40.png"
          className="github-img"
          onClick={redirectGithub}></img>
        </div> */}
      </div>
      <div className="side-stuff-second-container"></div>
      <span className="suggestions-for-you-styling secondary-gray-text">
        Check out these Users!
        <SideNonFollowedUsers userId={user.id} />
      </span>
    </div>
  );
};

export default SideStuff;
