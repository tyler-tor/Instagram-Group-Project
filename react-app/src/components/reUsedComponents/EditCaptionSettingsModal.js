import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { TbDots } from "react-icons/tb";
import EditCaptionFormModal from "./EditCaptionModal";
import DeletePostModal from "./DeletePostModal";

const EditCaptionThreeDotsModal = (postId) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <a className="" onClick={() => setShowModal(true)}>
        <TbDots className="the-three-dots" />
      </a>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="post-settings-modal-container-new">
            <EditCaptionFormModal postId={postId} onClose={() => setShowModal(false)}/>
            <DeletePostModal
              postId={postId}
              className="post-settings-modal-button-new except-top"
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default EditCaptionThreeDotsModal;
