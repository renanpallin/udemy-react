import { DO_LOGIN, DO_LOGOUT } from '../actions/authActions';
const INITIAL_STATE = { token: null, name: 'Maisa' };

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DO_LOGIN:
      return { token: action.token, name: action.name };
    case DO_LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}
