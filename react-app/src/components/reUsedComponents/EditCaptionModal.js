import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditCaptionForm from "./EditCaptionForm";

const EditCaptionFormModal = ({onClose, postId }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(!showModal)}
        className="post-settings-modal-button-new except-top"
      >
        Edit
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditCaptionForm
            onClose={onClose}
            postId={postId}
          />
        </Modal>
      )}
    </>
  );
};

export default EditCaptionFormModal;
