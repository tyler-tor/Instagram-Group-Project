import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditCaptionForm from "./EditCaptionForm";


const EditCaptionFormModal = ({postId}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(!showModal)}
      >
        Edit
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditCaptionForm onClose={() => setShowModal(false)} postId= {postId}/>
        </Modal>
      )}
    </>
  );
};

export default EditCaptionFormModal;
