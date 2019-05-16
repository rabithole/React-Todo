import React from 'react';

class TodoForm extends React.Component {
	constructor(){
		super();
		this.state = {
			task: ""
		};
	}

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
						value={this.state.task}
						name='task' 
						placeholder='Add your todo here' 

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