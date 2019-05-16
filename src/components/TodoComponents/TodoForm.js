import React from 'react';

const TodoForm = props => {
	return (
		<div>
			<form name='todoItem' > 
				<input type='text' name='todo' placeholder='Add your todo here' onClick={props.addTodoEvent} />
				<br/>
				<button id='addTodo' onClick={props.addTodoEvent}>Add ToDo</button>
				<br/>
				<button id='clear' onClick={props.addTodoEvent}>Clear Completed</button>
			</form>
		</div>
	);
}


export default TodoForm;