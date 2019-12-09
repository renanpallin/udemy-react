import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default class TodoApp extends React.Component {
  state = {
    todos: [
      "lavar a louça",
      "estudar react",
      "Dar 5 estrelas no curso"
    ],
  }

  onSaveTodo(newTodo) {
    const todoList = this.state.todos;

    this.setState({
      todos: [...todoList, newTodo],
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todo App</h1>

        <TodoForm
          onSaveTodo={newTodo => this.onSaveTodo(newTodo)} />

        <TodoList todos={todos} />
      </div>
    );
  }
}