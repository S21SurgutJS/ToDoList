'use-strict';

const taskList = [
  {
    text: 'Some todo text',
    isDone: true,
  }
]

const controlButton = document.querySelector('.controls__btn');
const controlInput = document.querySelector('.controls__input');
const todoList = document.querySelector('.todo-list');

function render() {
  todoList.innerHTML = '';
  taskList.forEach((elem, index) => {
    createItem(elem, index);
  });
}

function createItem ({text, isDone}, index) {
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

  todoListButton.addEventListener(('click'), () => {
    taskList.splice(todoListButton.dataset.number, 1);
    render();
  })

  todoInput.addEventListener(('change'), checkboxHandler);
}

controlButton.addEventListener('click', addTodoHandler);

function addTodoHandler(event) {
  event.preventDefault();
  const text = controlInput.value;
  if (text.trim().length) {
    taskList.push({ text: text, isDone: false });
    render();
  }
  controlInput.value = '';
}

render();