import React, { useEffect } from "react";
import LoginForm from "./LoginForm";
import SignUpFormModal from "./SignUpModal";
import Carousel from "./Carousel";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="papa-div">
      <div className="login-page-left-side-container">
        This will be slideshow
        <Carousel />
      </div>
      <div className="login-page-right-side-container">
        <LoginForm />
        <div className="sign-up-container">
          Don't have an account? <SignUpFormModal />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
