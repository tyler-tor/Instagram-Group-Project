import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import PostSettingsModal from "./PostSettingsModal";
import stockImage from "../../images/screenshot1-2x.png";

const ActualFeed = () => {
  return (
    <div className="">
      <div className="feed-container">
        <div className="feed-child post-username-and-settings-container">
          <div className="poster-username-and-circle">
            <FaUserCircle className="poster-profile-picture-for-post" />
            <a className="poster-username">Username</a>
          </div>
          <PostSettingsModal />
        </div>
        <div id="post-image" className="feed-child post-image-wrapper">
          <img
            className="feed-child post-image-wrapper"
            src={stockImage}
            alt="example post"
          />
        </div>
        <div className="feed-child like-comment-icon-container">
          <AiOutlineHeart className="post-icon-button" />
          <IoChatbubbleOutline className="post-icon-button reverse" />
        </div>
        <div className="feed-child liked-by-container"></div>
        <div className="feed-child post-caption-container"></div>
        <div className="post-caption-container-and-show-all-comments"></div>
        <div className="feed-child post-time-passed-container"></div>
        <div className="feed-child add-a-comment"></div>
      </div>
    </div>
  );
};

export default ActualFeed;
