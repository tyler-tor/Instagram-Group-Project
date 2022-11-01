import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { TbDots } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { updateComment, deleteComment } from "../../store/comments";

const EditCommentForm = ({ onClose, commentId }) => {
  const [errors, setErrors] = useState([]);
  const comment = useSelector((state) => state.comments[commentId].body);
  console.log(comment);
  const [tempComment, setTempComment] = useState(comment);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      body: tempComment,
      commentId: commentId,
    };

    let updatedComment = await dispatch(updateComment(payload));
    if (updatedComment) {
      onClose();
    }
  };

  const destroyComment = async (e) => {
    e.preventDefault();
    dispatch(deleteComment(commentId));
  };

  return (
    <div className="post-settings-modal-container">
      <form onSubmit={handleSubmit} className="">
        {/* <ul>
                {errors.map((error, idx) => (
                  <li key={idx}>{error}</li>
                ))}
              </ul> */}
        <input
          type="text"
          placeholder="comment"
          required
          value={tempComment}
          onChange={(e) => setTempComment(e.target.value)}
        />
        <button className="same-button" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <button onClick={destroyComment} className="post-settings-modal-button">
        Delete
      </button>
    </div>
  );
};

export default EditCommentForm;
