const GET_POSTS = "posts/GET_POSTS";

const getPosts = (posts) => ({
  type: GET_POSTS,
  payload: posts,
});

const initialState = { posts: null };

export const getAllPosts = () => async (dispatch) => {
  const response = await fetch("/api/posts");
  return response;
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return { posts: action.payload };
    default:
      return state;
  }
}
