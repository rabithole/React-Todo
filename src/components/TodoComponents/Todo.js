import React from 'react';

const Todo = props => {
	return (
		<div 
			className={`task${props.completed ? " completed" : ""}`} 
			onClick={() => props.toggleItem(props.taskid)}
		>
			<p>{props.task}</p>
		</div>
	);
};

export default Todo;