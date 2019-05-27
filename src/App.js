import React from 'react';
import './components/TodoComponents/Todo.css';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
// import todo from './components/TodoComponents/Todo';


// const todos = [
//   {
//     task: 'sleep',
//     id: 1,
//     completed: false
//   },
//   {
//     task: 'ride',
//     id: 2,
//     completed: false
//   }
// ];

const todos = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
  }

  toggleItem = (itemid) => {
    console.log( itemid);
    this.setState({
      todos: this.state.todos.map(item => {
        if (itemid === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  addTask = item => {
    // console.log(item);
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

  clearCompleted = e => {
    // e.preventDefault();
    console.log(todos)
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div id='outerDiv'>
        <div>
          <h1>Things To Do</h1>
          <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted}/>
        </div>

        <TodoList 
        todos={this.state.todos} 
        toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
