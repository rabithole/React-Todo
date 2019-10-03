 import React from 'react';

class TodoForm extends React.Component {
	constructor(){
		super();
		this.state = {
			task: ""
		};
	}

	handleChange = e => {
		// console.log(e.target.value)
    	this.setState({ [e.target.name]: e.target.value });
  	};

	submitTask = e => {
		// alert('yup');
	    e.preventDefault();
	    this.setState({ task: "" });
	    this.props.addTask(this.state.task);
	    // console.log(this.state.task)
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