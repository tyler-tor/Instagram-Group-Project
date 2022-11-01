import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { TbDots } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { updateComment, deleteComment } from "../../store/comments";
import EditCommentForm from "./EditCommentForm";

const CommentSettingsModal = ({ commentId }, props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <a className="" onClick={() => setShowModal(true)}>
        <TbDots className="the-three-dots" />
      </a>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditCommentForm
            commentId={commentId}
            onClose={() => setShowModal(false)}
          />
        </Modal>
      )}
    </>
  );
};

export default CommentSettingsModal;
