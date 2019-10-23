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
      todos // If this is not set, the empty list will not render.
    };
  }

  toggleItem = (itemid) => { // Toggles completed to true or false
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
      todos: [...this.state.todos, newTask] // adds the new task to the todos array using the spread operator. 
    });
    // console.log(newTask);
    // localStorage.setItem('newTask', JSON.stringify(this.state.todos))
    // console.log(localStorage.getItem('newTask'))
  };

  clearCompleted = e => {
    // e.preventDefault();
    console.log(this.state.todos)
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    });
    console.log('After: ' , this.state.todos)
  };

  render() {
    // console.log(this.state.todos);
    return (
      <div id='outerDiv'>
        <div>
          <h1>Things To Do</h1>
          <TodoForm 
            addTask={this.addTask} 
            clearCompleted={this.clearCompleted}
          />
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
