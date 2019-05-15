import React from 'react';

// const TodoForm = props =>
class TodoForm extends React.Component {
	addTodoEvent = () => alert('click event registered');
	render() {
		return (
			<div>
				<form name='todoItem' > 
					<input type='text' name='todo' placeholder='Add your todo here'/>
					<br/>
					<button onClick={this.addTodoEvent}>Add ToDo</button>
					<br/>
					<button>Clear Completed</button>
				</form>
			</div>
		);
	}
}

export default TodoForm;