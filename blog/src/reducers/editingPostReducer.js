import { SAVE_POST, SET_VALUE } from '../actions';

const INITIAL_STATE = { id: '', title: '', img: '', author: '', createdAt: '' };

export default function editingPostReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_VALUE:
      return { ...state, [action.key]: action.value };
    case SAVE_POST:
      return INITIAL_STATE;
    default:
      return state;
  }
}
