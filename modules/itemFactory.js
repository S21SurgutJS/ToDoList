import { storage } from './storage.js'
import { render } from './render.js';

/**
 * @param {string} item.text 
 * @param {boolean} item.isDone 
 */
export function createItem({ id, text, isDone }) {

  const item = document.createElement('li');
  item.className = 'todo-list__item';

  const todoLabel = document.createElement('label');
  todoLabel.className = 'todo-list__label';

  const todoInput = document.createElement('input');
  todoInput.className = 'todo-list__checkbox';
  todoInput.type = 'checkbox';
  todoInput.checked = isDone;
  todoInput.name = 'пометка о выполнении задачи';
  todoInput.setAttribute('data-number', id);
  todoLabel.appendChild(todoInput);

  const todoText = document.createElement('p');
  todoText.className = 'todo-list__text';
  todoText.innerHTML = text;
  todoLabel.appendChild(todoText);

  item.appendChild(todoLabel);

  const todoListButton = document.createElement('button');
  todoListButton.className = 'todo-list__btn';
  todoListButton.innerHTML = `<span class = "visually-hidden">Удалить запись</span>`;
  todoListButton.setAttribute('data-number', id);

  item.appendChild(todoListButton);

  todoListButton.addEventListener(('click'), (e) => {
    console.log('ID |', id);
    storage.removeItem(id)
    render()
  }, { once: true });

  todoInput.addEventListener(('change'), () => {
    storage.updateItem(id, { text, isDone: !isDone })
    render()
  });

  return item
}