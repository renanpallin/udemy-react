import React from 'react';
import { connect } from 'react-redux';
import { setText, addTodo } from '../actions';

const TodoForm = ({ text, setText, addTodo }) => {
  return (
    <React.Fragment>
      <input
        value={text}
        onChange={e => setText(e.target.value)} />
      <button onClick={() => addTodo(text)}>salvar</button>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    text: state.text
  };
}

const mapDispatchToProps = { setText, addTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)