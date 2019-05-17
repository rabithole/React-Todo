import React from 'react';
import './components/TodoComponents/Todo.css';

import TodoForm from './components/TodoComponents/TodoForm';
// import todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';

const todos = [
  {
    task: 'sleep',
    "id": 1,
    completed: false
  },
  {
    task: 'ride',
    "id": 2,
    completed: false
  }
];

// const todos = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
  }

  toggleItem = itemid => {
    console.log("itemid: ", itemid);
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
    const newTask = {
      task: item,
      "id": Date.now(),
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
        <div>
          <h3>Do These Things</h3>
          <TodoForm addTask={this.addTask} />
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
