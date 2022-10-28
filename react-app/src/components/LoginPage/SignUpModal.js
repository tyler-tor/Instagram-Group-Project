import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignUpForm from "./SignUpForm";

const SignUpFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <span className="sign-up-modal-text" onClick={() => setShowModal(true)}>
        Sign Up
      </span>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm onClose={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
};

export default SignUpFormModal;
