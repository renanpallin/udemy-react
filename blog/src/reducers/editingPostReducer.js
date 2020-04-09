import { SAVE_POST, SET_VALUE } from '../actions';
import {
  SET_EDITING_POST,
  CLEAR_EDITING_POST,
} from '../actions/editingPostActions';

const INITIAL_STATE = { id: '', title: '', img: '', author: '', createdAt: '' };

export default function editingPostReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_VALUE:
      return { ...state, [action.key]: action.value };
    case SET_EDITING_POST:
      return action.post;
    case CLEAR_EDITING_POST:
    case SAVE_POST:
      return INITIAL_STATE;
    default:
      return state;
  }
}
