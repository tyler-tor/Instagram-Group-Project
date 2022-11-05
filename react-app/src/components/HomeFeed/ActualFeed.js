import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import PostSettingsModal from "./PostSettingsModal";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllFollowingPosts } from "../../store/followingPosts";
import SinglePostModal from "../reUsedComponents/SinglePostModal";
import {
  addUserLikedPostId,
  deleteUserLikedPostId,
} from "../../store/user_post_like_list";

const ActualFeed = () => {
  const dispatch = useDispatch();
  const posts = Object.values(useSelector((state) => state.followingPosts)).reverse();
  const [likePost, setLikePost] = useState(false);

  useEffect(() => {
    dispatch(getAllFollowingPosts());
  }, [dispatch]);

  if (!posts) return null;

  const handleLikeButton = (post) => {
    if (!likePost) {
      dispatch(addUserLikedPostId(post.id));
    } else {
      dispatch(deleteUserLikedPostId(post.id));
    }
    setLikePost(!likePost);
  };

  return (
    <div className="">
      {posts.map((post) => {
        return (
          <div className="feed-container" key={post.id}>
            <div className="feed-child post-username-and-settings-container">
              <div className="poster-username-and-circle">
                <FaUserCircle className="poster-profile-picture-for-post" />
                <NavLink
                  to={`/${post.users.userId}`}
                  className="poster-username"
                >
                  <strong className="username-text">
                    {post.users.username}
                  </strong>
                </NavLink>
              </div>
              <PostSettingsModal post={post} />
            </div>
            <div id="post-image" className="feed-child post-image-wrapper">
              {/* <SinglePostModal
                post={post}
                className="feed-child post-image-wrapper"
              /> */}
              <img
                className="feed-child post-image-wrapper"
                src={post.imgUrl}
                alt="example post"
              />
            </div>
            <div className="feed-child like-comment-icon-container">
              <div
                className="no-styling"
                onClick={() => handleLikeButton(post)}
              >
                {/* <AiOutlineHeart className="post-modal-icons-likes-comments except-first-icon-in-modal" /> */}
                {/* {likePost ? (
                  <AiFillHeart className="post-modal-icons-likes-comments no-left-padding red" />
                ) : (
                  <AiOutlineHeart className="post-modal-icons-likes-comments no-left-padding" />
                )} */}
              </div>
              {/* <IoChatbubbleOutline className="post-icon-button reverse" /> */}
              {/* <SinglePostModalButton post={post} /> */}
            </div>
            <div className="feed-child likes-count-container">
              <strong>{post.likes} likes </strong>
            </div>
            <div className="post-caption-container-and-show-all-comments">
              <div className="username-caption-div">
                <NavLink
                  to={`/${post.users.userId}`}
                  className="username-no-spacing"
                >
                  {post.users.username}
                </NavLink>
                <span className="caption-spacing-from-username">
                  {post.caption}
                </span>
              </div>
            </div>
            <div className="feed-child post-time-passed-container">
              <span className="secondary-text-grey font-size-10">
                {post.createdAt}
              </span>
            </div>
            <div className="feed-child add-a-comment"></div>
          </div>
        );
      })}
    </div>
  );
};

export default ActualFeed;
