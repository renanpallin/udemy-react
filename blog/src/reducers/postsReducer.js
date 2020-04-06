import { SAVE_POST } from '../actions';
import { FETCH_POSTS } from '../actions/postActions';

export default function postReducer(state = [], action) {
  switch (action.type) {
    case SAVE_POST:
      if (action.post.id)
        return state.map((post) =>
          post.id === action.post.id ? action.post : post
        );
      return [...state, { ...action.post, id: Date.now() }];
    case FETCH_POSTS:
      return action.posts;
    default:
      return state;
  }
}
