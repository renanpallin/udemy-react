import { ADD_TODO, TOGGLE_TODO } from '../actions';

export default function todosReducer(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        { text: action.todo, done: false }
      ];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo === action.todo) {
          return { ...todo, done: !todo.done}
        }
        return todo;
      });
    default:
      return state;
  }
}
