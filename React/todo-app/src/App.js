import React from 'react';
import "./App.css";
import TodoList from './components/todoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Finish homework", "Wash dishes", "Clean room", "Sweep Garage"],
    };
  }

  addTodo = todo => {
    this.setState(prevState => ({
      todos: [...prevState.todos, todo],
    }));
  };

  deleteTodo = value => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo !== value),
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>Todo list</h1>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <TodoForm addTodo={this.addTodo} />
        <p>This is a simple Todo list! Type a request to add it to the list, and select the list item to remove it.</p>
      </div>
    );
  }
}

export default App;
