import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { TbDots } from "react-icons/tb";

const PostSettingsModal = ({ post }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <a className="" onClick={() => setShowModal(true)}>
        <TbDots className="the-three-dots" />
      </a>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="post-settings-modal-container">
            <div className="post-settings-modal-button except-top">Follow</div>
            <div
              className="post-settings-modal-button"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default PostSettingsModal;
