import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignUpForm from "./SignUpForm";

const SignUpFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <a className="sign-up-modal-text" onClick={() => setShowModal(true)}>
        Sign Up
      </a>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm onClose={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
};

export default SignUpFormModal;
