import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TempComment = () => {
    const user = useSelector(state => state.session.user);
    // const dispatch = useDispatch()
    const [body, setBody] = useState('');

    const onSubComment = async (e) => {
        e.preventDefault();
        // const response = await fetch(`/api/posts/1/comments`, {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         user_id: user.id,
        //         body: body,
        //         post_id: 1
        //     })
        //   });
        // if(response.ok){
        //     let data = await response.json()
        //     console.log(data)
        // }
        // -------------------------update--------------------------------
        const response = await fetch('/api/comments/4', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                body: body
            })
        })
        if(response.ok){
            let data = await response.json()
            // console.log(data)
        }
        // -------------------------delete-----------------------------------------------
        // const response = await fetch('/api/comments/4', {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
    }

    const updateBody = (e) => {
        setBody(e.target.value);
      };


    return(
        <>
            <div>
                <form onSubmit={onSubComment}
                action='/api/posts/:postId/comments'>
                    <div>
                        <label>Body</label>
                        <input
                            name='body'
                            type='text'
                            value={body}
                            onChange={updateBody}
                        >
                        </input>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )


}

export default TempComment
