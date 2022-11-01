import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import "./SinglePostModal.css";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaRegSmile } from "react-icons/fa";
import EditCaptionFormModal from "./EditCaptionModal";

const SinglePostModal = ({post}) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [myPost, setMyPost] = useState(false);
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();

  // const post_comments = useSelector(state => state.comments)
  console.log('IN MODAL!!', user.id);
  useEffect(() => {
    /*
      dispatch(loadComments(post.id)).then(() => {
        setIsLoaded(true)
      })
    */
  },[dispatch])

  useEffect(()=>{
    if(user.id === post.userId){
      setMyPost(true)
    }
  },[post, user])

  const clickModal = () =>{
    setShowModal(true)
  }

  return (
    <>
      <img src={post.imgUrl} alt="" onClick={clickModal}/>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="post-modal-container">
            <div className="post-modal-image-wrapper">
              <img src={post.imgUrl} alt="Instagram Post" />
            </div>
            <div className="post-modal-content-container">
              <div className="post-modal-username-picture-row">
                <div className="post-modal-content-container-image-wrapper">
                  <img src={post.users.profilePicture} alt="" />
                </div>
                <div className="username-styling-and-margin-post-modal">
                  <strong>{post.users.username}</strong>

                </div>

                <div className='post-modal-content-container-caption'>
                  <strong>{post.caption}</strong>
                  {myPost && (
                    <>
                        <EditCaptionFormModal postId={post.id}/>

                    </>
                  )}

                </div>

              </div>

              <div className="post-modal-comments-section"></div>
              <div className="post-modal-like-comment-icon">
                <AiOutlineHeart className="post-modal-icons-likes-comments except-first-icon-in-modal" />
                <IoChatbubbleOutline className="post-modal-icons-likes-comments reverse" />
              </div>
              <div className="post-modal-likes-count">
                <strong> {post.likes} </strong>
              </div>
              <div className="post-modal-date-posted">{post.createdAt}</div>
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
