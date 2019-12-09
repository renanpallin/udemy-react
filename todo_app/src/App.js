import React from 'react';

export default class TodoApp extends React.Component {
  state = {
    inputValue: 'mudando aqui'
  }

  onChangeInput(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <input
          value={this.state.inputValue}
          onChange={e => this.onChangeInput(e)} />
        <button>salvar</button> 
      </div>
    );
  }
}