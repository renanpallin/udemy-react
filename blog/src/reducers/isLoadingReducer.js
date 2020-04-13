import { SET_IS_LOADING } from '../actions/isLoadingActions';

export default function isLoadingReducer(state = true, action) {
  switch (action.type) {
    case SET_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

// Ideia para selectors
// export function onlyFiltered(state) {
//   if (!state.filter) return state;
//   return state.data.filter((post) => post.title.startsWith(state.filter));
// }
