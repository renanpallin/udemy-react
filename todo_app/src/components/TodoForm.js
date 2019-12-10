import React from 'react';
import { connect } from 'react-redux';
import { setText, addTodo } from '../actions';

const TodoForm = ({ text, setText, addTodo }) => {
  return (
    <form
      className="row"
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(text);
      }}>
      <div className="input-field col s10">
        <input
          id="todo-input"
          type="text"
          value={text}
          onChange={e => setText(e.target.value)} />
          <label htmlFor="todo-input">Novo todo</label>
      </div>
      <div className="input-field col s2">
        <button className="btn waves-effect waves-light">
            salvar
        </button>
      </div>
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