import React from "react";
import LoginForm from "./LoginForm";
import SignUpFormModal from "./SignUpModal";
import Carousel from "./Carousel";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="papa-div">
      <div className="login-page-left-side-container">
        <Carousel />
      </div>
      <div className="login-page-right-side-container">
        <LoginForm />
        <div className="have-an-account-sign-up-box-container">
          Don't have an account?&nbsp; <SignUpFormModal />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
