import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TempFollow = () => {
    const user = useSelector(state => state.session.user);
    console.log(user.id);
    const dispatch = useDispatch()
    const [followingId, setFollowingId] = useState(0);
    const [unFollowingId, setUnFollowingId] = useState(0)

    const onSubFollow = async (e) => {
        e.preventDefault();
        const response = await fetch(`/api/users/${followingId}/follow`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          });
        if(response.ok){
            let data = await response.json()
            console.log(data)
        }
    }
    const onSubUnFollow = async (e) => {
        e.preventDefault();
        const response = await fetch(`/api/users/${unFollowingId}/follow`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          });
        if(response.ok){
            let data = await response.json()
            console.log(data)
        }
    }

    const updateId = (e) => {
        setFollowingId(e.target.value);
      };

    const updateUnFollowId = (e) => {
        setUnFollowingId(e.target.value);
    }

    return(
        <>
            <div>
                <form onSubmit={onSubFollow}>
                    <div>
                        <label>UserId to Follow</label>
                        <input
                            name='followId'
                            type='number'
                            value={followingId}
                            onChange={updateId}
                        >

                        </input>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div>
            <h2>Un-follow test</h2>
            <form onSubmit={onSubUnFollow}>
                    <div>
                        <label>UserId to Un-Follow</label>
                        <input
                            name='followId'
                            type='number'
                            value={unFollowingId}
                            onChange={updateUnFollowId}
                        >

                        </input>
                    </div>
                    <button type='submit'>Submit</button>
                </form>

            </div>

        </>
    )


}

export default TempFollow
