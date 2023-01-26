import React, { useState } from "react";
import './LoginPage.css'

function ProPicImageUpload({setUrl}) {
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(false);
    const [prevImageUrl, setPrevImageUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        setImageLoading(true);

        formData.append('image', image);
        const res = await fetch('/api/img/upload', {
            method: 'POST',
            body: formData
        });

        if (res.ok) {
            const image_url = await res.json();
            setImageLoading(false);
            setUrl(image_url.url);
            setUploadedImage(true);
            setPrevImageUrl(image_url.url);
        }else {
            setImageLoading(false);
        };
    };

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    return (
        <div className="signup-propic-wrapper">
            <form onSubmit={handleSubmit}>
                <div className="supp-input-btn-wrapper">
                    <input type='file' accept='image/*' onChange={updateImage} />
                    <button type="submit" className="upload-img-btn">Upload Profile Picture</button>
                </div>
                {imageLoading && <p>Loading...</p>}
            </form>
            {uploadedImage && (
                <img src={prevImageUrl} alt='Your Profile Image' className='supp-prev-img' />
            )}
        </div>
    )
}

export default ProPicImageUpload
