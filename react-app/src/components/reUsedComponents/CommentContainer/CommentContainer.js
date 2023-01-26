import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllComments } from "../../../store/comments";
import { getCurrentPost } from "../../../store/currentPost";
import CommentSettingsModal from "../EditCommentModal";

const CommentContainer = ({ postId, setShowModal }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const comments = Object.values(useSelector((state) => state.comments));
  const post = useSelector((state) => state.currentPost);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentPost(postId)).then((res) => {
      dispatch(getAllComments(postId));
      setIsLoaded(true);
    });
  }, [dispatch]);

  return (
    <>
      {isLoaded ? (
        <ul className="comments-section-container">
          <li className="comments-section-child-container">
            <img src={post.users.profilePicture} alt="" />
            <div className="username-styling-in-post-modal">
              <strong>{post.users.username} </strong>
              <span className="body-styling-in-post-modal">{post.caption}</span>
            </div>
          </li>
          {comments.map((comment) => {
            if (comment.postId == post.id) {
              return (
                <li
                  className="comments-section-child-container"
                  key={comment.id}
                >
                  <img src={comment.users.profilePicture} alt="" />
                  <div className="username-styling-in-post-modal">
                    <strong>{comment.users.username} </strong>
                    <span className="body-styling-in-post-modal">
                      {comment.body}
                    </span>
                  </div>
                  {comment.myComment && (
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
      ) : (
        <>
          <h1> Loading </h1>
        </>
      )}
    </>
  );
};

export default CommentContainer;
