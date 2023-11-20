export const todoListItemsCreation = (task) => {
	const {id, text, isDone} = task;
	
	const todoListItem = document.createElement('li');
	todoListItem.className = 'todo-list__item';
	
	const todoListItemLabel = document.createElement('label');
	todoListItemLabel.className = 'todo-list__label';
	
	const todoListItemInput = document.createElement('input');
	todoListItemInput.className = 'todo-list__input';
	todoListItemInput.type = 'checkbox';
	todoListItemInput.checked = isDone;
	todoListItemInput.setAttribute('data-id', id);
	
	const todoListItemText = document.createElement('p');
	todoListItemText.className = 'todo-list__text';
	todoListItemText.textContent = text;
	
	todoListItemLabel.append(todoListItemInput, todoListItemText);
	
	const todoListItemButton = document.createElement('img');
	todoListItemButton.className = 'todo-list__btn';
	todoListItemButton.alt = 'Удалить запись';
	todoListItemButton.src = './img/trash.svg';
	
	todoListItem.append(todoListItemLabel, todoListItemButton);
	
	const todoList = document.querySelector('ul');
	todoList.appendChild(todoListItem)
}

