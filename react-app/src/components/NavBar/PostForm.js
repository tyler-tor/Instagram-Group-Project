import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

const PostForm = () => {
  const [errors, setErrors] = useState([]);
  const [caption, setCaption] = useState("");
  const [url, setUrl] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onPostSubmit = async (e) => {
    // Need to create a function that posts to database
  };

  const updateCaption = (e) => {
    setCaption(e.target.value);
  };

  const updateUrl = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="post-form-wrapper">
      <form className="post-form-container" onSubmit={onPostSubmit}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className="post-form-children">
          <input
            className="post-form-input-text-boxes"
            name="caption"
            type="text"
            placeholder="Caption"
            value={caption}
            onChange={updateCaption}
          />
        </div>
        <div className="post-form-children">
          <input
            className="post-form-input-text-boxes"
            name="Photo URL"
            type="text"
            placeholder="Photo URL"
            value={url}
            onChange={updateUrl}
          />
        </div>
        <div className="post-form-children">
          <button className="post-form-default-submit-button" type="submit">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;