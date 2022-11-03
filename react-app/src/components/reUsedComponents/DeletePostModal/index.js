import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import DeletePost from "./DeletePost";

const DeletePostModal = ({ postId }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(!showModal)}
        className="post-settings-modal-button-new"
      >
        Delete
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeletePost onClose={() => setShowModal(false)} postId={postId} />
        </Modal>
      )}
    </>
  );
};

export default DeletePostModal;
