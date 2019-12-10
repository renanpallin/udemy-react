import React from 'react';
import { connect } from 'react-redux';

const TodoList = ({ todos }) => {
  return (
    <ul className="collection">
      {todos.map((todo, index) => {
        return (
          <li
            className="collection-item"
            key={index}>
            {todo}
          </li>
        );
      })}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList);