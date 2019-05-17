import React from 'react';

const Todo = props => {
	return (
		<div 
			className={`item${props.completed ? " completed" : ""}`} 
			onClick={() => props.toggleItem(props.taskid, props.completed)}
		>
			<p>{props.task}</p>
		</div>
	);
};

export default Todo;