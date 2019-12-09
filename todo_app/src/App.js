import React from 'react';

export default class TodoApp extends React.Component {
  state = {
    inputValue: '',
    todos: [
      "lavar a louça",
      "estudar react",
      "Dar 5 estrelas no curso"
    ],
  }

  onChangeInput(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  
  render() {
    const { inputValue, todos } = this.state;
    return (
      <div>
        <h1>Todo App</h1>
        <input
          value={inputValue}
          onChange={e => this.onChangeInput(e)} />
        <button>salvar</button>

        <ul>
          {todos.map((todo, index) => {
            return <li key={index}>{todo}</li>
          })}
        </ul>
      </div>
    );
  }
}