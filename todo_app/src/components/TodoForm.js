import React from 'react';
import { connect } from 'react-redux';
import { setText, addTodo } from '../actions';

const TodoForm = ({ text, setText, addTodo }) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      addTodo(text);
    }}>
      <input
        value={text}
        onChange={e => setText(e.target.value)} />
      <button
        className="btn">
          salvar
      </button>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    text: state.text
  };
}

const mapDispatchToProps = { setText, addTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)