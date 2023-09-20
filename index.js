'use-strict';

let taskList = [];
const todoKey = 'todoList';

const controlButton = document.querySelector('.controls__btn');
const controlInput = document.querySelector('.controls__input');
const todoList = document.querySelector('.todo-list');

function render() {
  todoList.innerHTML = '';
  if (localStorage.length) {
    taskList = JSON.parse(localStorage.getItem(todoKey));
  }
  taskList.forEach((elem, index) => {
    createItem(elem, index);
  });
}

function createItem({ text, isDone }, index) {
  const item = document.createElement('li');
  item.className = 'todo-list__item';

  const todoLabel = document.createElement('label');
  todoLabel.className = 'todo-list__label';

  const todoInput = document.createElement('input');
  todoInput.className = 'todo-list__checkbox';
  todoInput.type = 'checkbox';
  todoInput.checked = isDone;
  todoInput.name = 'пометка о выполнении задачи';
  todoInput.setAttribute('data-number', index);
  todoLabel.appendChild(todoInput);

  const todoText = document.createElement('p');
  todoText.className = 'todo-list__text';
  todoText.innerHTML = text;
  todoLabel.appendChild(todoText);

  item.appendChild(todoLabel);

  const todoListButton = document.createElement('button');
  todoListButton.className = 'todo-list__btn';
  todoListButton.innerHTML = `<span class = "visually-hidden">Удалить запись</span>`;
  todoListButton.setAttribute('data-number', index);

  const todoImg = document.createElement('img');
  todoImg.className = 'todo-list__img';
  todoImg.src = 'img/bascket.svg';
  todoListButton.appendChild(todoImg);

  item.appendChild(todoListButton);
  todoList.appendChild(item);

  todoListButton.addEventListener(('click'), deleteTodoHandler);

  todoInput.addEventListener(('change'), checkboxHandler);
}

function checkboxHandler(event) {
  let index = event.target.dataset.number;
  taskList[index].isDone = event.target.checked;
  localStorage.setItem(todoKey, JSON.stringify(taskList));
}

controlButton.addEventListener('click', addTodoHandler);

function addTodoHandler(event) {
  event.preventDefault();
  const text = controlInput.value;
  if (text.trim().length) {
    const item = { text: text, isDone: false };
    taskList.push(item);
    localStorage.setItem(todoKey, JSON.stringify(taskList));
    render();
  }
  controlInput.value = '';
}

function deleteTodoHandler(event) {
  let index = event.target.dataset.number;
  taskList.splice(index, 1);
  localStorage.setItem(todoKey, JSON.stringify(taskList));
  render();
}

render();