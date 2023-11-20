export const todoListItemsCreation = () => {
	const todoListItem = document.createElement('li');
	todoListItem.className = 'todo-list__item';
	
	const todoListItemLabel = document.createElement('label');
	todoListItemLabel.className = 'todo-list__label';
	
	const todoListItemInput = document.createElement('input');
	todoListItemInput.className = 'todo-list__input';
	todoListItemInput.type = 'checkbox';
	
	const todoListItemText = document.createElement('p');
	todoListItemText.className = 'todo-list__text';
	
	const controlItemButton = document.createElement('button');
	controlItemButton.className = 'controlItem__btn';
	controlItemButton.textContent = 'Добавить';
}
// 	<!-- <div class="todo-list__item">
// 	  <input class="todo-list__item-input" type="checkbox">
// 	  <p class="todo-list__item-text">Some Text</p>
// 	  <img src="/img/trash.svg" alt="Удалить">
// 	</div>
//
// 	<div class="todo-list__item todo-field__item_done">
// 	  <input checked class="todo-list__item-input" type="checkbox">
// 	  <p class="todo-list__item-text">Some Text</p>
// 	  <img src="/img/trash.svg" alt="Удалить">
// 	</div> -->
