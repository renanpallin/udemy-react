import { combineReducers } from 'redux';

import posts from './postsReducer';
import editingPost from './editingPostReducer';
import auth from './authReducer';

export default combineReducers({
  posts,
  editingPost,
  auth,
});
