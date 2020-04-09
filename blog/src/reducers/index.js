import { combineReducers } from 'redux';

import posts from './postsReducer';
import editingPost from './editingPostReducer';
import auth from './authReducer';
import isLoading from './isLoadingReducer';

export default combineReducers({
  posts,
  editingPost,
  auth,
  isLoading,
});
