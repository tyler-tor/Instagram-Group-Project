import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./ImageUploadComponent.css";
//!pass in a setValue from postForm to get the image url.
const ImageUploadComponent = ({ setUrl }) => {
  const history = useHistory(); // so that we can redirect after the image upload is successful
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [uploadedImg, setUploadImg] = useState(false);
  const [prevImgUrl, setPrevImgUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // aws uploads can be a bit slow—displaying
    // some sort of loading message is a good idea

    setImageLoading(true);

    formData.append("image", image);
    const res = await fetch("/api/img/upload", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      const img_url = await res.json();
      setImageLoading(false);
      setUrl(img_url.url);
      setUploadImg(true);
      setPrevImgUrl(img_url.url);
      console.log(img_url.url);
    } else {
      setImageLoading(false);
      // a real app would probably use more advanced
      // error handling
      console.log("error");
    }
  };

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="upload-photo-container">
          <input type="file" accept="image/*" onChange={updateImage} />
          <button type="submit">Submit</button>
        </div>
        {imageLoading && <p>Loading...</p>}
      </form>
      {uploadedImg && (
        <img src={prevImgUrl} alt="your image" className="prev_img" />
      )}
    </>
  );
};

export default ImageUploadComponent;
