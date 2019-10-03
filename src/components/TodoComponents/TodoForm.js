 import React from 'react';

class TodoForm extends React.Component {
	constructor(){
		super();
		this.state = {
			task: ""
		};
	}

//----------------------------
	// e = event which is a synthetic React event. 
	// Synthetic events are handled by React opposed to the DOM
	// Events are a series of methods on the event object that are accessable through the DOM or through React in the case of a synthetic event. 

	handleChange = e => {
		// console.log(e.target.value)
    	this.setState({ [e.target.name]: e.target.value });
    	// target returns the element that created the event. 
    	// target.name = 
    	// console.log(e.target.name);
  	};

//--------------------------------------
	submitTask = e => {
	    e.preventDefault();
	    this.setState({ task: "" });
	    this.props.addTask(this.state.task);
	    // console.log(this.state.task)
	    console.log(this.state.task)
	    localStorage.setItem('newTask', JSON.stringify(this.state.task))
  	};

  	clearComplete = e => {
  		e.preventDefault();
  		console.log('It worked!')
  		this.props.clearCompleted();
  	}

	render() {
		return (
			<div>
				<form name='todoItem'> 
					<input 
						type='text' 
						value={this.state.task}
						name='task' 
						placeholder='Add your todo here' 
						onChange={this.handleChange}

						/>
					<br/>
					<button id='addTodo' onClick={this.submitTask}>Add ToDo</button>
					<br/>
					<button id='clear' onClick={this.clearComplete}>Clear Completed</button>
				</form>
			</div>
		);
	}
}


export default TodoForm;