import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updatefirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="sign-up-container">
      <div className="logo-holder sign-up-logo"></div>
      <form className="form-container" onSubmit={onSignUp}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <h2 className="sign-up-form-header-text">
          Sign up to see photos and videos from your friends.
        </h2>
        <div className="form-children">
          <input
            className="form-input-text-boxes"
            type="text"
            name="username"
            placeholder="Username"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className="form-children">
          <input
            className="form-input-text-boxes"
            type="text"
            name="First Name"
            placeholder="First Name"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className="form-children">
          <input
            className="form-input-text-boxes"
            type="text"
            name="Last Name"
            placeholder="Last Name"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className="form-children">
          <input
            className="form-input-text-boxes"
            type="text"
            name="email"
            placeholder="Email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className="form-children">
          <input
            className="form-input-text-boxes"
            type="password"
            name="password"
            placeholder="Repeat Password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className="form-children">
          <input
            className="form-input-text-boxes"
            type="password"
            name="repeat_password"
            placeholder="Repeat Password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <h3 className="sign-up-form-policy-text">
          <strong></strong>
          By signing up, you agree to our{" "}
          <strong> Terms, Privacy Policy </strong> and{" "}
          <strong>Cookies Policy</strong>.
        </h3>
        <button className="form-default-submit-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
