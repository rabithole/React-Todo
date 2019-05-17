import React from 'react';

class TodoForm extends React.Component {
	constructor(){
		super();
		this.state = {
			task: ""
		};
	}

	handleChange = e => {
    	this.setState({ [e.target.name]: e.target.value });
  	};

	submitTask = e => {
		// alert('yup');
	    e.preventDefault();
	    this.setState({ task: "" });
	    this.props.addTask(this.state.task);
  	};

	render() {
		return (
			<div>
				<form name='todoItem'> 
					<input 
						type='text' 
						value={this.state.item}
						name='task' 
						placeholder='Add your todo here' 
						onChange={this.handleChange}

						/>
					<br/>
					<button id='addTodo' onClick={this.submitTask}>Add ToDo</button>
					<br/>
					<button id='clear'>Clear Completed</button>
				</form>
			</div>
		);
	}
}


export default TodoForm;