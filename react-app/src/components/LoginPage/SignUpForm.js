import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import { useHistory } from "react-router-dom";
// import ImageUploadComponent from "../NavBar/ImageUploadComponent/ImageUploadComponent";
import ProPicImageUpload from "./ProPicImageUpload";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [payload, setPayload] = useState({});
  const [url, setUrl] = useState(null);
  const user = useSelector((state) => state.session.user);
  const history = useHistory()
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      if(url) {
        setPayload({
          username:  username,
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          profilePicture: url
        })
      }else {
        setPayload({
          username:  username,
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName
        })
      }
      const data = await dispatch(signUp(username, email, password, firstName, lastName, url));
      if (data) {
        setErrors(data);
      }
      else{

        history.push('/explore')

      }
    }else{

      setErrors(['The passwords do not match, Try again'])
      setPassword('')
      setRepeatPassword('')
      return
    }

  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };
  const updateFirstName = (e) => {
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
        <h2 className="sign-up-form-header-text">
          Sign up to see photos and videos from your friends.
        </h2>
        <h3>Optional profile picture:</h3>
          <ProPicImageUpload setUrl={setUrl} />
      <form className="form-container" onSubmit={onSignUp}>
        <div className="signup-errors">
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
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
            onChange={updateFirstName}
            value={firstName}
          ></input>
        </div>
        <div className="form-children">
          <input
            className="form-input-text-boxes"
            type="text"
            name="Last Name"
            placeholder="Last Name"
            onChange={updateLastName}
            value={lastName}
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
            placeholder="Set Password"
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
