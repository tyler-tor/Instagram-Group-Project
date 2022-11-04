import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import PostSettingsModal from "./PostSettingsModal";
import stock from "../../images/stock.jpg";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllFollowingPosts } from "../../store/post";

const ActualFeed = ({posts}) => {
  // const posts = Object.values(useSelector((state) => state.posts));
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getAllFollowingPosts())
  // }, [dispatch])

  const handleClick = () => {

  }

  return (
    <div className="">
      {posts.map(post => {
        return (
          <div className="feed-container"
          key={post.id}>
            <div className="feed-child post-username-and-settings-container">
              <div className="poster-username-and-circle">
                <FaUserCircle className="poster-profile-picture-for-post" />
                <NavLink to={`/${post.users.userId}`} className="poster-username">
                  <strong className="username-text">{post.users.username}</strong>
                </NavLink>
              </div>
              <PostSettingsModal />
            </div>
            <div id="post-image" className="feed-child post-image-wrapper">
              <img
                className="feed-child post-image-wrapper"
                src={post.imgUrl}
                alt="example post"
              />
            </div>
            <div className="feed-child like-comment-icon-container">
              <AiOutlineHeart className="post-icon-button except-first-icon" />
              <IoChatbubbleOutline className="post-icon-button reverse" />
            </div>
            <div className="feed-child likes-count-container">
              <strong>{post.likes}</strong>
            </div>
            <div className="post-caption-container-and-show-all-comments">
              <div className="username-caption-div">
                <strong>{post.users.username}</strong>
                <span className="caption-spacing-from-username">
                  {post.caption}
                </span>
              </div>
              <div>
                <span className="secondary-text-grey">View all xxx comments</span>
              </div>
            </div>
            <div className="feed-child post-time-passed-container">
              <span className="secondary-text-grey font-size-10">{post.createdAt}</span>
            </div>
            <div className="feed-child add-a-comment">
              <FaRegSmile className="comment-smiley-face" />
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default ActualFeed;
