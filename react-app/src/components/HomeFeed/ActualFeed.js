import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import PostSettingsModal from "./PostSettingsModal";
import stock from "../../images/stock.jpg";

const ActualFeed = () => {
  return (
    <div className="">
      <div className="feed-container">
        <div className="feed-child post-username-and-settings-container">
          <div className="poster-username-and-circle">
            <FaUserCircle className="poster-profile-picture-for-post" />
            <a className="poster-username">
              <strong>theoman42</strong>
            </a>
          </div>
          <PostSettingsModal />
        </div>
        <div id="post-image" className="feed-child post-image-wrapper">
          <img
            className="feed-child post-image-wrapper"
            src={stock}
            alt="example post"
          />
        </div>
        <div className="feed-child like-comment-icon-container">
          <AiOutlineHeart className="post-icon-button except-first-icon" />
          <IoChatbubbleOutline className="post-icon-button reverse" />
        </div>
        <div className="feed-child likes-count-container">
          <strong>XXX likes</strong>
        </div>
        <div className="post-caption-container-and-show-all-comments">
          <div className="username-caption-div">
            <strong>theoman42</strong>
            <span className="caption-spacing-from-username">
              This will be the caption
            </span>
          </div>
          <div>
            <span className="secondary-text-grey">View all xxx comments</span>
          </div>
        </div>
        <div className="feed-child post-time-passed-container">
          <span className="secondary-text-grey font-size-10">19 hours ago</span>
        </div>
        <div className="feed-child add-a-comment">
          <FaRegSmile className="comment-smiley-face" />
        </div>
      </div>
    </div>
  );
};

export default ActualFeed;
