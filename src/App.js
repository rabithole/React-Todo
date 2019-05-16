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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
  }

  addTodoEvent = event => {
    // alert('click event registered');
    this.setState({ task: event.target.value });
  }

  render() {
    return (
      <div id='outerDiv'>
        <h3>Do These Things</h3>
        <TodoList todos={this.state.todos} />
        <TodoForm addTodoEvent={this.addTodoEvent} />
      </div>
    );
  }
}

export default App;
