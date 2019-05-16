import React from 'react';
import './components/TodoComponents/Todo.css';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      task: '',
      Id: null,
      completed: false
    };
  }

  addTodoEvent = event => {
    // alert('click event registered');
    this.setState({ task: event.target.value });
  }

  render() {
    return (
      <div id='outerDiv'>
        <h3>Task: {this.state.task}</h3>
        <TodoForm addTodoEvent={this.addTodoEvent} />
      </div>
    );
  }
}

export default App;
