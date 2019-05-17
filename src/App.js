import React from 'react';
import './components/TodoComponents/Todo.css';

import TodoForm from './components/TodoComponents/TodoForm';
// import todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';

const todos = [
  {
    task: 'sleep',
    id: 1,
    completed: false
  },
  {
    task: 'ride',
    id: 2,
    completed: false
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
  }

  addTask = item => {
    const newTask = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTask]
    });
    console.log(newTask);
  };

  render() {
    return (
      <div id='outerDiv'>
        <h3>Do These Things</h3>
        
        <TodoForm addTask={this.addTask} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
