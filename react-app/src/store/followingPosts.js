const GET_FOLLOWING_POSTS = 'following/GET_FOLLOWING_POSTS'

const getFollowingPosts = (posts) => ({
    type: GET_FOLLOWING_POSTS,
    payload: posts
  });


export const getAllFollowingPosts = () => async (dispatch) => {
  const response = await fetch("/api/me/following/posts");
  if (response.ok) {
      const data = await response.json();
      dispatch(getFollowingPosts(data.Posts));
      return data;
  }
  return response;
}

export default function followingPostsReducer( state = {}, action ) {
    let newState;
    switch(action.type) {
        case GET_FOLLOWING_POSTS:
        newState = {...state};
        action.payload.forEach((post) => {
            newState[post.id] = post
        })
        return newState;
        default:
            return state;
    }
}
