import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import "./SinglePostModal.css";
import { AiOutlineHeart } from "react-icons/ai";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaRegSmile } from "react-icons/fa";
import profilePhoto from "../../images/screenshot1-2x.png";

const SinglePostModal = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <img src={props.img} alt="" onClick={() => setShowModal(true)} />
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="post-modal-container">
            <div className="post-modal-image-wrapper">
              <img src={props.img} alt="Instagram Post" />
            </div>
            <div className="post-modal-content-container">
              <div className="post-modal-username-picture-row">
                <div className="post-modal-content-container-image-wrapper">
                  <img src={profilePhoto} alt="" />
                </div>
                <div className="username-styling-and-margin-post-modal">
                  <strong>theoman42</strong>
                </div>
              </div>
              <div className="post-modal-comments-section"></div>
              <div className="post-modal-like-comment-icon">
                <AiOutlineHeart className="post-modal-icons-likes-comments except-first-icon-in-modal" />
                <IoChatbubbleOutline className="post-modal-icons-likes-comments reverse" />
              </div>
              <div className="post-modal-likes-count">
                <strong> 25,000 likes </strong>
              </div>
              <div className="post-modal-date-posted">OCTOBER 22</div>
              <div className="post-modal-add-comment-container">
                <div className="left-hand-container-for-post-modal-comment-input">
                  <FaRegSmile className="comment-smiley-face" />
                  <div>Add a comment</div>
                </div>
                <div className="right-hand-container-for-post-modal-comment-input">
                  <button>Post</button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SinglePostModal;
