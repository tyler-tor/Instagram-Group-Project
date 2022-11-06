import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { updatePost } from "../../store/post";

const EditCaptionForm = ({ onClose, postId }) => {
  const [errors, setErrors] = useState([]);
  const [caption, setCaption] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();


  const onCaptionSubmit = async (e) => {
    e.preventDefault();
    // Need to create a function that posts to database
    // console.log(postId);
    let editedCaption = {
                id : postId.postId,
                caption: caption,
              }

    await dispatch(updatePost(editedCaption)).then((res)=>{
      if(res){
        // console.log('caption modal',res);
        setErrors(res)
      }
      else{
        onClose();
      }
    })
    .catch(e => {
      // console.log(e);
    })
  };

  const updateCaption = (e) => {
    setCaption(e.target.value);
  };

  return (
    <div className="post-form-wrapper">
      <form className="post-form-container" onSubmit={onCaptionSubmit}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className="post-form-children">
          <input
            name="caption"
            type="text"
            placeholder="Caption"
            value={caption}
            onChange={updateCaption}
          />
        </div>
        <div className="post-form-children">
          <button className="post-form-default-submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCaptionForm;
