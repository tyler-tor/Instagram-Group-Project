import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import "./SinglePostModal.css";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaRegSmile } from "react-icons/fa";
import EditCaptionFormModal from "./EditCaptionModal";
import DeletePostModal from "./DeletePostModal/index";
import { deletePost } from "../../store/post";
import { getAllComments } from "../../store/comments";
import { postComment } from "../../store/comments";
import CommentSettingsModal from "./EditCommentModal";

const SinglePostModal = ({ post }) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [myPost, setMyPost] = useState(false);
  const [myComment, setMyComment] = useState(false);
  const [comment, setComment] = useState("");
  const user = useSelector((state) => state.session.user);
  const comments = Object.values(useSelector((state) => state.comments));
  const dispatch = useDispatch();

  // const post_comments = useSelector(state => state.comments)
  // console.log('IN MODAL!!', user.id);
  useEffect(() => {
    //!maybe move to the click event? everytime explore page renders it gets ALL of the posts comments.

    dispatch(getAllComments(post.id)).then(() => {
      setIsLoaded(true);
    });
    console.log(comments);
  }, [dispatch]);

  useEffect(() => {
    if (user.id === post.userId) {
      setMyPost(true);
    }
  }, [post, user]);

  // useEffect(() => {
  //   comments.map(comment => {

  //   })
  // }, [comments, user])

  const clickModal = () => {
    // dispatch(getAllComments(post.id)).then(() => {
    //   setIsLoaded(true)
    // })
    setShowModal(true);
  };

  const updateComment = (e) => {
    setComment(e.target.value);
  };

  const submitComment = async (e) => {
    e.preventDefault();

    const payload = {
      postId: post.id,
      body: comment,
    };

    let newComment = await dispatch(postComment(payload)).then((res) => {
      console.log("Posted Comment", res);
    });

    console.log(newComment);
  };

  //! This is used to test deleting without a modal. When deleting with modal
  //! there is a warning for a cleanup in a useEffect function.
  //! i am guessing this is because when a post is deleted, one of the modals is not
  //! getting cleaned up propery.
  // const deletePostTest = async e =>{
  //   e.preventDefault()
  //   const del = await dispatch(deletePost(post.id))
  //   .then(()=>{
  //       console.log('TEST DELETE STARTED');
  //   })
  // }

  return (
    <>
      <img src={post.imgUrl} alt="" onClick={clickModal} />
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
                <div className="username-styling-in-post-modal">
                  <strong>{post.users.username}</strong>
                </div>

                <div className="post-modal-content-container-caption">
                  {myPost && (
                    <>
                      <EditCaptionFormModal postId={post.id} />
                      <DeletePostModal postId={post.id} />
                      {/* <button onClick={deletePostTest}>Delete</button> */}
                    </>
                  )}
                </div>
              </div>

              <div className="post-modal-comments-section">
                {isLoaded && (
                  <>
                    <ul className="comments-section-container">
                      <li className="comments-section-child-container">
                        <img src={post.users.profilePicture} alt="" />
                        <div className="username-styling-in-post-modal">
                          <strong>{post.users.username}</strong>
                        </div>
                        <div className="body-styling-in-post-modal">
                          {post.caption}
                        </div>
                      </li>
                      {comments.map((comment) => {
                        if (comment.postId == post.id) {
                          return (
                            <li
                              className="comments-section-child-container"
                              key={comment.id}
                            >
                              <img src={post.users.profilePicture} alt="" />
                              <div className="username-styling-in-post-modal">
                                <strong>{comment.users.username}</strong>
                              </div>
                              <div className="body-styling-in-post-modal">
                                {comment.body}
                              </div>
                              {user.id == comment.users.id && (
                                <CommentSettingsModal
                                  commentId={comment.id}
                                  onClose={() => setShowModal(false)}
                                />
                              )}
                              <div></div>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </>
                )}
              </div>
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
                  {/* <div>Add a comment</div> */}
                  <form className="comment-form-wrapper">
                    <div className="comment-form-container">
                      <input
                        type="text"
                        placeholder={"Add a comment"}
                        value={comment}
                        onChange={updateComment}
                      />
                      <div className="right-hand-container-for-post-modal-comment-input">
                        <button type="submit" onClick={submitComment}>
                          Post
                        </button>
                      </div>
                    </div>
                  </form>
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
