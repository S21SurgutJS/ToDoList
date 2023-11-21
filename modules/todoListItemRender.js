import { getTaskList } from './utils.js'
import { todoListItemsCreation } from './todoListItemsCreation.js'

export const todoListItemRender = () => {
	const todoList = document.querySelector('.todo-list');
	todoList.innerHTML = ''
	getTaskList().forEach((el) => {
		todoList.appendChild(todoListItemsCreation(el))
	});
};
