import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TempPost = () => {
    const user = useSelector(state => state.session.user);
    // const dispatch = useDispatch()
    const [caption, setCaption] = useState('');
    const [imageUrl, setImageUrl] = useState('')

    const onSubPost = async (e) => {
        e.preventDefault();
        // const response = await fetch(`/api/posts/`, {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         user_id: user.id,
        //         caption: caption,
        //         img_url: imageUrl
        //     })
        //   });
        // if(response.ok){
        //     let data = await response.json()
        //     console.log(data)
        // }
        // -------------------------update--------------------------------
        // const response = await fetch('/api/posts/4', {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         caption: caption
        //     })
        // })
        // -------------------------delete-----------------------------------------------
        const response = await fetch('/api/posts/4', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const updateCaption = (e) => {
        setCaption(e.target.value);
      };

    const updateImageUrl = (e) => {
        setImageUrl(e.target.value);
      };


    return(
        <>
            <div>
                <form onSubmit={onSubPost}
                action='/api/posts/'>
                    <div>
                        <label>Caption</label>
                        <input
                            name='caption'
                            type='text'
                            value={caption}
                            onChange={updateCaption}
                        >

                        </input>
                        <label>Image Url</label>
                        <input
                            name='img_url'
                            type='text'
                            value={imageUrl}
                            onChange={updateImageUrl}
                        >

                        </input>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )


}

export default TempPost
