// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
	return (
		<div>
			{props.todos.map(item => (
					<Todo 
						key={item.id}
						taskid={item.id} 
						task={item.task} 
						toggleItem={props.toggleItem}
					/>
				))}
		</div>
	);
}

export default TodoList;