import { storage } from './storage.js'
import { createItem } from './itemFactory.js';
import { todoList } from './constants.js'

export function render() {
  todoList.innerHTML = '';
  const taskList = storage.getItems()
  taskList.forEach((elem) => {
    const tmp = createItem(elem);
    todoList.appendChild(tmp)
  });

}