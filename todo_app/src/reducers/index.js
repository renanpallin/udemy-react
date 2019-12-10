import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import textReducer from './textReducer';

export default combineReducers({
  todos: todosReducer,
  text: textReducer,
});