import { settingTaskList } from './utils.js'
import { todoListItemRender } from './todoListItemRender.js'

export const appCreation = () => {
	const app = document.querySelector('#app');
	
	app.className = 'container';
	app.innerHTML = '';
	
	const controlItem = document.createElement('form');
	controlItem.className = 'controlItem';
	
	const controlItemInput = document.createElement('input');
	controlItemInput.className = 'controlItem__input';
	controlItemInput.type = 'text';
	
	const controlItemButton = document.createElement('button');
	controlItemButton.className = 'controlItem__btn';
	controlItemButton.textContent = 'Добавить';
	controlItemButton.addEventListener('click', (elem) => {
		elem.preventDefault();
		
		if (controlItemInput.value.trim().length) {
			settingTaskList(controlItemInput.value);
			controlItemInput.value = '';
			todoListItemRender();
		}
	})
	
	
	const todoList = document.createElement('ul');
	todoList.className = 'todo-list';
	
	app.append(controlItem, todoList);
	controlItem.append(controlItemInput, controlItemButton);
}
