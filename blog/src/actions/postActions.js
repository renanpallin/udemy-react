import initial_state_mock from '../initial_state_mock';

export const SAVE_POST = '@post/SAVE_POST';
// export const savePost = (post) => ({
//   type: SAVE_POST,
//   post,
// });
export const savePost = (post) => (dispatch) => {
  const action = {
    type: SAVE_POST,
    post,
  };

  return delay(500).then(() => dispatch(action));
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const FETCH_POSTS = '@post/FETCH_POSTS';
export const fetchPosts = () => (dispatch) => {
  delay(500).then(() => {
    dispatch({
      type: FETCH_POSTS,
      posts: initial_state_mock.posts,
    });
  });
};
