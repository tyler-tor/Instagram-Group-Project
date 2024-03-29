import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import logo from "../../images/text-1677259699931.png";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const demoLogIn = async (e) => {
    await dispatch(login("demo@aa.io", "password"));
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-form-and-other-stuff-container ">
      <div className="logo-holder">
      <img className="logo-wrapper" src={logo} alt="logo" />
      </div>
      <form className="form-container" onSubmit={onLogin}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className="form-children">
          <input
            className="form-input-text-boxes"
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className="form-children">
          <input
            className="form-input-text-boxes"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
        </div>
        <div className="form-children">
          <button className="form-default-submit-button" type="submit">
            Log in
          </button>
        </div>
      </form>
      <div className="or-styling"> or </div>
      <button className="form-default-submit-button demo" onClick={demoLogIn}>
        Demo Login
      </button>
    </div>
  );
};

export default LoginForm;
